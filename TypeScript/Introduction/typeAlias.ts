type user = {
  name: string;
  email: string;
  readonly id?: number;
  readonly arrayId?: object; 
};

let userPrince: user = {
  name: "prabh",
  email: "prabh@dev.in",
  // id: 43,
  arrayId: ["239"],
};

userPrince.email = "Prince@dev.in";
// userPrince.id = 3988;
userPrince.arrayId