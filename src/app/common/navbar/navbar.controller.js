import { $on, $qs, $cc, $adc, $rmc, $detach } from '../../utils/helpers';

class NavbarController {
  constructor() {
    this.$L = 1200;
    this.$body = $qs('body');
    this.$header = $qs('header');
    this.$menu_navigation = $qs('#main-nav');
    this.$cart_trigger = $qs('#cd-cart-trigger');
    this.$hamburger_icon = $qs('#cd-hamburger-menu');
    this.$lateral_cart = $qs('#cd-cart');
    this.$shadow_layer = $qs('#cd-shadow-layer');
    this.windowWidth = window.innerWidth;
  }

  $onInit() {
    this.removeShadowLayer();
    $on(window, 'resize', () => {
      if (this.windowWidth >= this.$L && $cc('speed-in', this.$menu_navigation)) {
        $rmc('speed-in', this.$menu_navigation);
        $rmc('is-visible', this.$shadow_layer);
        $rmc('overflow-hidden', this.$body);
      }
    });
  }

  openMenu() {
    this.$hamburger_icon.addEventListener('click', (event) => {
      event.preventDefault();
      $rmc('speed-in', this.$lateral_cart);
      this.togglePanelVisibility(this.$menu_navigation);
    });
  }

  openCart() {
    $on(this.$cart_trigger, 'click', (event) => {
      event.preventDefault();
      $rmc('speed-in', this.$menu_navigation);
      this.togglePanelVisibility(this.$lateral_cart);
    });
  }

  removeShadowLayer() {
    if (this.$shadow_layer) {
      $on(this.$shadow_layer, 'click', (event) => {
        $rmc('is-visible', this.$shadow_layer);
        $rmc('speed-in', this.$lateral_cart);
        $rmc('speed-in', this.$menu_navigation);
        $rmc('overflow-hidden', this.$body);
      });
    }
  }

  togglePanelVisibility($panel) {
    if (!$panel) { return }

    if ($cc('speed-in', $panel)) {
      $rmc('speed-in', $panel);
      $rmc('is-visible', this.$shadow_layer);
      $rmc('overflow-hidden', this.$body);
    } else {
      $adc('speed-in', $panel);
      $adc('is-visible', this.$shadow_layer);
      $adc('overflow-hidden', this.$body);
    }
  }
}

export default NavbarController;
