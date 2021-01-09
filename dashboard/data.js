const Canvas = {
  width: 720,
  height: 720,
  getWidth() {
    return this.width;
  },
  getHeight() {
    return this.height;
  },
}

const dashBoard = {
  name: "速度",
  unit: "m/s",
  radius: 240,
  borderWidth: 20,
  minValue: 0,
  maxValue: 100,
  currentValue: 20,
  getName() {
    return this.name;
  },
  getRadius() {
    return this.radius;
  },
  getBoder() {
    return this.borderWidth;
  },
  getValue() {
    return Math.floor(this.currentValue);
  },
  getMax() {
    return this.maxValue;
  },
  getMin() {
    return this.minValue;
  },
  getInterval() {
    return this.maxValue - this.minValue;
  },
  setMinimal(min) {
    this.minValue = min;
  },
  setMaximal(max) {
    this.maxValue = max;
  },
  setValue(val) {
    this.currentValue = val > this.maxValue ? this.maxValue : val;
  }
}

