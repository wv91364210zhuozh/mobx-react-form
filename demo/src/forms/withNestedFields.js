// const fields = {};

const fields = [
  'club.name',
  'club.city',
  'members',
  'members[].firstname',
  'members[].lastname',
  'members[].hobbies',
  'members[].hobbies[]',
];

// const fields = {
//   club: {
//     name: 'HELLO',
//     city: 'NY',
//   },
//   members: [{
//     firstname: 'Clint',
//     lastname: 'Eastwood',
//     hobbies: ['Soccer', 'Baseball'],
//   }, {
//     firstname: 'Charlie',
//     lastname: 'Chaplin',
//     hobbies: ['Golf', 'Basket'],
//   }],
// };

const labels = {
  'club': 'Label Club',
  'club.name': 'Label Club Name',
  'club.city': 'Label Club City',
  'members': 'Label Members',
  'members[].firstname': 'Label Member FirstName',
  'members[].lastname': 'Label Member LastName',
  'members[].hobbies': 'Label Member Hobby',
};

export default { fields, labels };
