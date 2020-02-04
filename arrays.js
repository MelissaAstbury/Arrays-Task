const printReverse = arr => {
  arr.reverse();

  arr.forEach(item => {
    //item = "hi";
    console.log(item);
  });

  //console.log(arr);
};

//printReverse([1, 2, 3, 4, 5]);
//printReverse(["ben", "holly", "melissa"]);

/**
 * To create function
 *
 *      const funcName = () => {
 *
 *      };
 *
 *
 * To Call function
 *
 *      funcName();
 */

// let person = {
//   firstName: "mel",
//   lastName: "ast",
//   ag: 20,
//   eyecuulor: "grey"
// };

//console.log(person["firstName"]);
// above mispelt on purpose to show this does not matter
// console.log(person.firstName);

let people = {
  P1: {
    firstName: "mel",
    lastName: "ast",
    age: 20,
    eyecuulor: "grey"
  },
  P2: {
    firstName: "andy",
    lastName: "pel",
    age: 20,
    eyecuulor: "grey"
  },
  P3: {
    firstName: "jack",
    lastName: "mod",
    age: 20,
    eyecuulor: "grey"
  }
};

//console.log(people.P1.age);

//console.log(people[P1]);

//console.log(people.P1.firstName);

Object.keys(people).map(person => {
  console.log(person);

  //   Object.keys(person).map(personDetails => {
  //     console.log(personDetails);
  //   });
});

// const user = {
//   id: 101,
//   email: "jack@dev.com",
//   personalInfo: {
//     name: "Jack",
//     address: {
//       line1: "westwish st",
//       line2: "washmasher",
//       city: "wallas",
//       state: "WX"
//     }
//   }
// };

// console.log(user.personalInfo.address.line1);
