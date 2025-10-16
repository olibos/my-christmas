import { css, html, LitElement, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import Christmass from './sounds/christmass.ogg';
import './konami';

@customElement('my-christmas')
export class ChristmasEasterEgg extends LitElement {

  @property({ type: Boolean })
  activated: boolean = false;

  toggle() {
    this.activated = !this.activated;
    if (this.activated){
      new Audio(Christmass).play();
    }
    this.render();
  }

  generateSnowflakes(count: number) {
    return Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 3,
      size: 10 + Math.random() * 20
    }));
  }

  generateGifts(count: number) {
    return Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 2
    }));
  }

  generateStars(count: number) {
    return Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2
    }));
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('konami-code', () => this.toggle());
    if (this.activated){
      new Audio(Christmass).play();
    }
  }

  static get styles() {
    return css`
      :host {
          display: block;
      }

      .overlay {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
      }

      .glow {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.1), rgba(34, 197, 94, 0.1), transparent);
        animation: pulse 3s ease-in-out infinite;
      }

      .star {
        position: absolute;
        animation: twinkle 2s ease-in-out infinite;
        font-size: 16px;
      }

      .snowflake {
        position: absolute;
        animation: fall linear infinite;
      }

      .gift {
        position: absolute;
        font-size: 32px;
        animation: fall-rotate linear infinite;
      }

      .sparkle {
        position: absolute;
        font-size: 40px;
        animation: sparkle-float 3s ease-in-out infinite;
      }

      .side-deco {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 4rem;
        animation: swing 3s ease-in-out infinite;
      }

      .side-deco.left {
        left: 1rem;
      }

      .side-deco.right {
        right: 1rem;
        animation-delay: 0.5s;
      }

      .bottom-deco {
        position: absolute;
        bottom: 1rem;
        font-size: 3rem;
        animation: bounce 1s ease-in-out infinite;
      }

      .bottom-deco.left {
        left: 25%;
        animation-delay: 0.2s;
      }

      .bottom-deco.right {
        right: 25%;
        animation-delay: 0.6s;
      }

      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }

      @keyframes fall {
        0% {
          transform: translateY(-100px) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0.8;
        }
      }

      @keyframes fall-rotate {
        0% {
          transform: translateY(-100px) rotate(0deg);
        }
        100% {
          transform: translateY(100vh) rotate(720deg);
        }
      }

      @keyframes twinkle {
        0%, 100% {
          opacity: 0.3;
          transform: scale(0.8);
        }
        50% {
          opacity: 1;
          transform: scale(1.2);
        }
      }

      @keyframes sparkle-float {
        0%, 100% {
          transform: translateY(0) rotate(0deg);
        }
        50% {
          transform: translateY(-20px) rotate(180deg);
        }
      }

      @keyframes bounce-slow {
        0%, 100% {
          transform: translateX(-50%) translateY(0);
        }
        50% {
          transform: translateX(-50%) translateY(-10px);
        }
      }

      @keyframes bounce {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
      }

      @keyframes swing {
        0%, 100% {
          transform: translateY(-50%) rotate(-5deg);
        }
        50% {
          transform: translateY(-50%) rotate(5deg);
        }
      }

      @keyframes shimmer {
        0% {
          background-position: -100% 0;
        }
        100% {
          background-position: 100% 0;
        }
      }        
    `;
  }

  render() {
    const snowflakes = this.activated ? this.generateSnowflakes(50) : [];
    const gifts = this.activated ? this.generateGifts(8) : [];
    const stars = this.activated ? this.generateStars(30) : [];

    if (!this.activated) return nothing;
    return html`
        <div class="overlay">
          <div class="glow"></div>

          ${stars.map(star => html`
            <div class="star" style="left: ${star.left}%; top: ${star.top}%; animation-delay: ${star.delay}s;">⭐</div>
          `)}

          ${snowflakes.map(flake => html`
            <div class="snowflake" style="left: ${flake.left}%; animation-duration: ${flake.duration}s; animation-delay: ${flake.delay}s; font-size: ${flake.size}px;">❄️</div>
          `)}

          ${gifts.map(gift => html`
            <div class="gift" style="left: ${gift.left}%; animation-duration: ${gift.duration}s; animation-delay: ${gift.delay}s;">🎁</div>
          `)}

          <div class="sparkle" style="top: 25%; left: 25%;">✨</div>
          <div class="sparkle" style="top: 33%; right: 25%; animation-delay: 0.5s;">✨</div>
          <div class="sparkle" style="bottom: 25%; left: 33%; animation-delay: 1s;">✨</div>

          <div class="side-deco left">🎄</div>
          <div class="side-deco right">🎅</div>

          <div class="bottom-deco left">🦌</div>
          <div class="bottom-deco right">⛄</div>
        </div>
    `;
  }
}