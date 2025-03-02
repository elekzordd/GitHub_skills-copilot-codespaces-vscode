function skillMembers() {
  var members = [
    {name: 'John', skill: 'JavaScript'},
    {name: 'Alice', skill: 'JavaScript'},
    {name: 'Bob', skill: 'Python'},
    {name: 'Charlie', skill: 'Python'},
  ];
  
  // Check if all members are JavaScript developers
  var areAllJS = members.every(function(member) {
    return member.skill === 'JavaScript';
  });
  
  console.log('All members are JavaScript developers:', areAllJS);
  
  // Check if at least one member is a JavaScript developer
  var isAnyJS = members.some(function(member) {
    return member.skill === 'JavaScript';
  });
  
  console.log('Any member is a JavaScript developer:', isAnyJS);
}