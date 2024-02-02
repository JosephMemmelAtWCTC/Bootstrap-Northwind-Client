/* ==========================================================================
   $BASE-PICKER
   ========================================================================== */
/**
 * Note: the root picker element should *NOT* be styled more than what’s here.
 */
.picker {
    font-size: 16px;
    text-align: left;
    line-height: 1.2;
    color: #000;
    position: absolute;
    z-index: 10000;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    outline: none;
  }
  /**
   * The picker input element.
   */
  .picker__input {
    cursor: default;
  }
  /**
   * When the picker is opened, the input element is “activated”.
   */
  .picker__input.picker__input--active {
    border-color: #0089ec;
  }
  /**
   * The holder is the only “scrollable” top-level container element.
   */
  .picker__holder {
    width: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  /*!
   * Default mobile-first, responsive styling for pickadate.js
   * Demo: http://amsul.github.io/pickadate.js
   */
  /**
   * Note: the root picker element should *NOT* be styled more than what’s here.
   */
  /**
   * Make the holder and frame fullscreen.
   */
  .picker__holder,
  .picker__frame {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    -ms-transform: translateY(100%);
        transform: translateY(100%);
  }
  /**
   * The holder should overlay the entire screen.
   */
  .picker__holder {
    position: fixed;
    transition: background 0.15s ease-out, transform 0s 0.15s;
    -webkit-backface-visibility: hidden;
  }
  /**
   * The frame that bounds the box contents of the picker.
   */
  .picker__frame {
    position: absolute;
    margin: 0 auto;
    min-width: 256px;
    max-width: 666px;
    width: 100%;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    -moz-opacity: 0;
    opacity: 0;
    transition: all 0.15s ease-out;
  }
  @media (min-height: 33.875em) {
    .picker__frame {
      overflow: visible;
      top: auto;
      bottom: -100%;
      max-height: 80%;
    }
  }
  @media (min-height: 40.125em) {
    .picker__frame {
      margin-bottom: 7.5%;
    }
  }
  /**
   * The wrapper sets the stage to vertically align the box contents.
   */
  .picker__wrap {
    display: table;
    width: 100%;
    height: 100%;
  }
  @media (min-height: 33.875em) {
    .picker__wrap {
      display: block;
    }
  }
  /**
   * The box contains all the picker contents.
   */
  .picker__box {
    background: #fff;
    display: table-cell;
    vertical-align: middle;
  }
  @media (min-height: 26.5em) {
    .picker__box {
      font-size: 1.25em;
    }
  }
  @media (min-height: 33.875em) {
    .picker__box {
      display: block;
      font-size: 1.33em;
      border: 1px solid #777;
      border-top-color: #898989;
      border-bottom-width: 0;
      border-radius: 5px 5px 0 0;
      box-shadow: 0 12px 36px 16px rgba(0, 0, 0, 0.24);
    }
  }
  @media (min-height: 40.125em) {
    .picker__box {
      font-size: 1.5em;
      border-bottom-width: 1px;
      border-radius: 5px;
    }
  }
  /**
   * When the picker opens...
   */
  .picker--opened .picker__holder {
    -ms-transform: translateY(0);
        transform: translateY(0);
    background: transparent;
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#1E000000,endColorstr=#1E000000)";
    zoom: 1;
    background: rgba(0, 0, 0, 0.32);
    transition: background 0.15s ease-out;
  }
  .picker--opened .picker__frame {
    -ms-transform: translateY(0);
        transform: translateY(0);
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    filter: alpha(opacity=100);
    -moz-opacity: 1;
    opacity: 1;
  }
  @media (min-height: 33.875em) {
    .picker--opened .picker__frame {
      top: auto;
      bottom: 0;
    }
  }