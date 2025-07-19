interface User {
  userId: number;
  email: string;
  googleId?: string;
  // startTrail: () => string
  startTrial(): string;
  getCoupon(name: string): string;
}

const Prince: User = {
  userId: 1,
  email: "Prabhjot@dev.in",
  startTrial() {
    return String(this.userId);
  },
  getCoupon(name) {
    return name;
  },
};

console.log("hello");
console.log(Prince.startTrial()); // logs the userId
console.log(Prince.getCoupon("discount2024")); // logs the coupon name

export {};
