const dietLibrary = [
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/testing-your-blood-sugar.jpeg",
    date: "Aug 22, 2022",
    heading: "Tried and true tips for testing your blood sugar",
    link: "https://www.mynetdiary.com/testing-your-blood-sugar.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/herbs-for-health-and-healing.jpeg",
    date: "Aug 19, 2022",
    heading:
      "Add these antioxidant-packed spices & herbs for health and healing to your daily meals",
    link: "https://www.mynetdiary.com/herbs-for-health-and-healing.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/healthy-quick-and-easy-dinner.jpg",
    date: "Aug 15, 2022",
    heading: "5 Quick & healthy dinner ideas that are really easy to make",
    link: "https://www.mynetdiary.com/healthy-quick-and-easy-dinner.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/what-motivates-you-to-stay-healthy-with-exercise.jpeg",
    date: "Aug 12, 2022",
    heading: "Here's how to stay motivated with your exercise routine",
    link: "https://www.mynetdiary.com/healthy-exercise.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/pack-a-healthy-lunch.jpeg",
    date: "Aug 8, 2022",
    heading:
      "Enjoy endless lunch options when you pack a mix-and-match healthy lunch",
    link: "https://www.mynetdiary.com/pack-a-healthy-lunch.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/how-to-make-healthy-food-kitchen-set-up-ideas.jpeg",
    date: "Aug 5, 2022",
    heading: "How to make healthy food at home easier with these 6 techniques",
    link: "https://www.mynetdiary.com/how-to-make-healthy-food.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/healthy-dairy-free-zucchini-brownies-1.jpg",
    date: "Aug 1, 2022",
    heading: "Healthy dairy-free zucchini brownies",
    link: "https://www.mynetdiary.com/healthy-zucchini-brownies.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/mental-benefits-of-yoga.jpeg",
    date: "Jul 29, 2022",
    heading: "The physical and mental benefits of yoga and how to get started",
    link: "https://www.mynetdiary.com/mental-benefits-of-yoga.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/low-calorie-snacks-that-fill-you-up.jpeg",
    date: "Jul 25, 2022",
    heading: "Add these low-calorie snacks to fill you up for hours!",
    link: "https://www.mynetdiary.com/low-calorie-snacks-that-fill-you-up.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/make-ahead-meals-healthy.jpeg",
    date: "Jul 22, 2022",
    heading:
      "Interested in creating make-ahead meals that are healthy and budget-conscious?",
    link: "https://www.mynetdiary.com/make-ahead-meals-healthy.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/tracking-diabetes-2.jpeg",
    date: "Jul 18, 2022",
    heading:
      "Gain easier control over blood sugar with these diabetes tracking tips from MyNetDiary",
    link: "https://www.mynetdiary.com/tracking-diabetes.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/benefits-of-cooking-at-home-vs-eating-out.jpeg",
    date: "Jul 15, 2022",
    heading:
      "10 Tips for making cooking at home a win-win on your busiest nights",
    link: "https://www.mynetdiary.com/healthy-and-tasty-food.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/workouts-to-get-back-in-shape.jpeg",
    date: "Jul 11, 2022",
    heading: "Home workouts to help you get back in shape",
    link: "https://www.mynetdiary.com/workouts-to-get-back-in-shape.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/affordable-protein.jpeg",
    date: "Jul 8, 2022",
    heading: "Affordable protein sources that don't break the bank!",
    link: "https://www.mynetdiary.com/affordable-protein.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/vacation-weight-gain.jpeg",
    date: "Jul 4, 2022",
    heading: "7 Dietitian-approved strategies to avoid vacation weight gain",
    link: "https://www.mynetdiary.com/vacation-weight-gain.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/sheet-pan-salmon.jpg",
    date: "Jul 1, 2022",
    heading:
      "Take the stress out of weeknight cooking, try this salmon sheet pan dinner",
    link: "https://www.mynetdiary.com/salmon-sheet-pan-dinner.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/seriously-you-want-me-to-walk-how-many-steps-per-day-how-to-walk-10000-steps-per-day.jpeg",
    date: "Jun 27, 2022",
    heading: "Set a daily step goal for health and weight loss",
    link: "https://www.mynetdiary.com/daily-step-goal.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/healthy-summer-bbq-recipes.jpg",
    date: "Jun 24, 2022",
    heading: "3 Delicious and healthy summer BBQ recipes!",
    link: "https://www.mynetdiary.com/healthy-summer-bbq-recipes.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/fresh-start-effect.jpeg",
    date: "Jun 20, 2022",
    heading:
      "What is the fresh-start effect, and how does it jump-start weight loss?",
    link: "https://www.mynetdiary.com/fresh-start-effect.html",
  },
  {
    img: "https://s3.amazonaws.com/img.mynetdiary.com/blog/easy-smoothie-recipes-for-weight-loss.jpeg",
    date: "Jun 17, 2022",
    heading:
      "How to make the most delicious & easy smoothie recipes for weight loss",
    link: "https://www.mynetdiary.com/easy-smoothie-recipes-for-weight-loss.html",
  },
];


export { dietLibrary };