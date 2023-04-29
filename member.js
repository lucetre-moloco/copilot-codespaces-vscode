function skillsMember() {
  var member = this;
  member.skills = [
    { name: "HTML", level: 8 },
    { name: "CSS", level: 7 },
    { name: "JS", level: 6 },
  ];
  member.addSkill = function () {
    member.skills.push({ name: member.skillName, level: member.skillLevel });
    member.skillName = "";
    member.skillLevel = "";
  };
  member.removeSkill = function (index) {
    member.skills.splice(index, 1);
  };
}
