const waffles = {
  pricing: [
    {
      title: "Friend",
      description:
        "Go and make friends with people who already have it. You can use it for free! Even better, ask them to use it. You get to eat free waffle bowls.",
      included: "Absolutely Nothing",
      price: "Free",
    },
    {
      title: "Owner",
      description:
        "Buy one and use it for yourself. You can make waffle bowls at home! Consider adding ice cream & fruit and enjoy.",
      included: "1 Waffle Bowl Maker",
      price: "$24,57",
    },
    {
      title: "Popular",
      description:
        "You're not yet but will definitely become popular if you buy 5 waffle bowl makers and gift them to anyone you wish to befriend.",
      included: "5 Waffle Bowl Makers",
      price: "$122,85",
    },
  ],
};

export function getWaffles() {
  return waffles;
}
