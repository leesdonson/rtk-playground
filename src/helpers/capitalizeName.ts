export const capitalize = (username: string): string => {
  let nameList = username.split(" ");
  const capitalizeName = nameList.map((name) => name.toUpperCase())[0];

  return capitalizeName;
};

export const userName = (username: string): string => {
  const nameList = username.split(" ").map((n) => n.toLowerCase());
  let x = nameList[0];
  let y = nameList[1];
  return x.concat(y);
};

export const initials = (username: string): string => {
  return username
    .split(" ")[0]
    .charAt(0)
    .concat(username.split(" ")[1].charAt(0))
    .toUpperCase();
};
