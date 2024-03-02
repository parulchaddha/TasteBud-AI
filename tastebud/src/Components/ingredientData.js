const ingredientData = [
    {"name": "5 spice powder", "id": 1002002},
    {"name": "alfredo pasta sauce", "id": 93606},
    {"name": "almond extract", "id": 1002050},
    {"name": "almonds", "id": 12061},
    {"name": "amaretto", "id": 10014534},,
    {"name": "apple", "id": 9003},
    {"name": "apple butter spread", "id": 19294},
    {"name": "apple cider", "id": 1009016},
    {"name": "apple juice", "id": 9016},
    {"name": "apple pie spice", "id": 1042035},
    {"name": "asafoetida", "id": 1032035},
    {"name": "asafoetida powder", "id": 0},
    {"name": "avocado", "id": 9037},
    {"name": "avocado oil", "id": 4581},
    {"name": "baby carrots", "id": 11960},
    {"name": "baby corn", "id": 10011168},
    {"name": "baby spinach leaves", "id": 11457},
    {"name": "baby-back ribs", "id": [10010204, 10192]}, // Note: Multiple IDs
    {"name": "bacon", "id": 10123},
    {"name": "bacon fat", "id": 4609},
    {"name": "baguette", "id": 18033},
    {"name": "baking bar", "id": 19078},
    {"name": "baking powder", "id": 18371},
    {"name": "baking soda", "id": 18372},
    {"name": "beef", "id": 23572},
    {"name": "beef brisket", "id": 13023},
    {"name": "beef broth", "id": 6008},
    {"name": "beef chuck roast", "id": 13786},
    {"name": "beef stock", "id": 6170},
    {"name": "beef tenderloin", "id": 13926},
    {"name": "beer", "id": [14003, 14006]}, // Note: Multiple IDs
    {"name": "beets", "id": 11080},
    {"name": "bell pepper", "id": 10211821},
    {"name": "berries", "id": 1009054},
    {"name": "biscuit mix", "id": 18010},
    {"name": "biscuits", "id": 18009},
    {"name": "bittersweet chocolate", "id": 19903},
    {"name": "black bean sauce", "id": 99210},
    {"name": "black beans", "id": 16015},
    {"name": "black olives", "id": 1059195},
    {"name": "black pepper", "id": 1002030},
    {"name": "black sesame seeds", "id": 10012023},
    {"name": "blackberries", "id": 9042},
    {"name": "boneless skinless chicken breast", "id": 1055062},
    {"name": "bourbon", "id": 10014037},
    {"name": "brandy", "id": 10114037},
    {"name": "bread", "id": 18064},
    {"name": "bread flour", "id": 10120129},
    {"name": "breakfast links", "id": 7919},
    {"name": "brie", "id": 1006},
    {"name": "broccoli", "id": 11090},
    {"name": "broccoli florets", "id": 10011090},
    {"name": "brown rice", "id": 20040},
    {"name": "brown rice flour", "id": 20090},
    {"name": "brown sugar", "id": 19334},
    {"name": "butter", "id": 1001},
    {"name": "butterhead lettuce", "id": 11250},
    {"name": "buttermilk", "id": 1230},
    {"name": "butternut squash", "id": 11485},
    {"name": "butterscotch chips", "id": 19070},
    {"name": "cabbage", "id": 11109},
    {"name": "caesar dressing", "id": 43015},
    {"name": "cajun seasoning", "id": 1032028},
    {"name": "cake flour", "id": 10020129},
    {"name": "candy canes", "id": 93759},
    {"name": "candy coating", "id": 98857},
    {"name": "candy melts", "id": 93775},
    {"name": "canned kidney beans", "id": 16034},
    {"name": "canned mushrooms", "id": 11264},
    {"name": "canned white cannellini beans", "id": 10016051},
    {"name": "cannellini beans", "id": 10716050},
    {"name": "cardamom", "id": 2006},
    {"name": "cardamom pods", "id": 1002006},
    {"name": "carp", "id": 15008},
    {"name": "carrots", "id": 11124},
    {"name": "cat fish filets", "id": 15010},
    {"name": "cauliflower", "id": 11135},
    {"name": "cauliflower florets", "id": 10011135},
    {"name": "cauliflower rice", "id": 10111135},
    {"name": "celery", "id": 11143},
    {"name": "cereal", "id": 8029},
    {"name": "champagne", "id": 10043155},
    {"name": "chana dal", "id": 99236},
    {"name": "cheddar", "id": 1009},
    {"name": "cheese", "id": 1041009},
    {"name": "cheese curds", "id": 98921},
    {"name": "cheese dip", "id": 1188},
    {"name": "cheese soup", "id": 6038},
    {"name": "cheese tortellini", "id": 10093727},
    {"name": "cherry", "id": 9070},
    {"name": "cherry pie filling", "id": 19314},
    {"name": "cherry tomatoes", "id": 10311529},
    {"name": "chestnuts", "id": 12098},
    {"name": "chia seeds", "id": 12006},
    {"name": "chicken base", "id": 6080},
    {"name": "chicken drumsticks", "id": 5066},
    {"name": "chicken legs", "id": 5075},
    {"name": "chicken pieces", "id": 1005006},
    {"name": "chicken sausage", "id": 93668},
    {"name": "chicken stock", "id": 6172},
    {"name": "chicken tenders", "id": 1015062},
    {"name": "chicken thighs", "id": 5091},
    {"name": "chicken wings", "id": 5100},
    {"name": "chickpea", "id": 16057},
    {"name": "chile garlic sauce", "id": 93749},
    {"name": "chili paste", "id": 6973},
    {"name": "chili peppers", "id": 11962},
    {"name": "chili powder", "id": 2009},
    {"name": "chili sauce", "id": 6972},
    {"name": "chocolate", "id": 19081},
    {"name": "chocolate chip cookies", "id": 28027},
    {"name": "chocolate chunks", "id": 10419903},
    {"name": "chocolate ice cream", "id": 19270},
    {"name": "chocolate milk", "id": 1102},
    {"name": "chocolate sandwich cookies", "id": 18166},
    {"name": "chocolate syrup", "id": 14181},
    {"name": "chocolate wafer cookies", "id": 10118157},
    {"name": "chorizo sausage", "id": 7019},
    {"name": "cider vinegar", "id": 2048},
    {"name": "cilantro", "id": 11165}, 
    {"name": "clam juice", "id": 14187},
    {"name": "clams", "id": 15157},
    {"name": "clarified butter", "id": 93632},
    {"name": "clove", "id": 1002011},
    {"name": "coarse salt", "id": 1002047},
    {"name": "coarsely ground pepper", "id": 2035},
    {"name": "cocoa nibs", "id": 98846},
    {"name": "cocoa powder", "id": 19165},
    {"name": "coconut", "id": 12104},
    {"name": "coconut butter", "id": 93746},
    {"name": "coconut cream", "id": 12115},
    {"name": "coconut extract", "id": 1032050},
    {"name": "coconut flour", "id": 93747},
    {"name": "coconut milk", "id": 12118},
    {"name": "coconut oil", "id": 4047},
    {"name": "coconut water", "id": 12119}, 
    {"name": "cod", "id": 15015},
    {"name": "coffee", "id": 14209},
    {"name": "cognac", "id": 10414037},
    {"name": "cola", "id": 14400},
    {"name": "colby jack", "id": 1011},
    {"name": "collard greens", "id": 11161},
    {"name": "cooked bacon", "id": 10862},
    {"name": "cooked brown rice", "id": 20041},
    {"name": "cooked chicken breast", "id": 5064},
    {"name": "cooked pasta", "id": 20421},
    {"name": "cookies", "id": 10118192},
    {"name": "coriander", "id": 2012},
    {"name": "corn", "id": 11168},
    {"name": "corn bread mix", "id": 18022},
    {"name": "corn chips", "id": 19003},
    {"name": "corn flakes cereal", "id": 8020},
    {"name": "corn flour", "id": 20019},
    {"name": "cornstarch", "id": 20027},
    {"name": "cotija cheese", "id": 1001019},
    {"name": "cottage cheese", "id": 1012},
    {"name": "country bread", "id": 10018029},
    {"name": "courgettes", "id": 11477},
    {"name": "couscous", "id": 20028},
    {"name": "cow pea", "id": 16063},
    {"name": "crabmeat", "id": 10015136},
    {"name": "cracked pepper", "id": 2030},
    {"name": "cranberries", "id": 9078},
    {"name": "cranberry juice", "id": 43382},
    {"name": "cream", "id": 1053},
    {"name": "cream cheese", "id": 1017},
    {"name": "cream cheese block", "id": 1186},
    {"name": "cream of chicken soup", "id": 6016},
    {"name": "cream of tartar", "id": 18373},
    {"name": "creamed corn", "id": 11174},
    {"name": "creamy peanut butter", "id": 10116098},
    {"name": "creme fraiche", "id": 1001056},
    {"name": "cremini mushrooms", "id": 11266},
    {"name": "creole seasoning", "id": 1002031},
    {"name": "crisp rice cereal", "id": 8066},
    {"name": "croutons", "id": 18242},
    {"name": "crystallized ginger", "id": 93751},
    {"name": "cucumber", "id": 11206},
    {"name": "cumin seeds", "id": 2014},
    {"name": "cup cake", "id": 18139},
    {"name": "currants", "id": 9085},
    {"name": "curry leaves", "id": 93604},
    {"name": "dairy free milk", "id": 10016223},
    {"name": "dark brown sugar", "id": 10019334},
    {"name": "dark chocolate", "id": 19904},
    {"name": "dark chocolate candy bars", "id": 10019904},
    {"name": "dark chocolate chips", "id": 10019071},
    {"name": "dark sesame oil", "id": 1004058},
    {"name": "dates", "id": 9087},
    {"name": "deep dish pie crust", "id": 18945},
    {"name": "diet pop", "id": 14146},
    {"name": "dijon mustard", "id": 1002046},
    {"name": "double cream", "id": 1011053},
    {"name": "dried apricots", "id": 9032},
    {"name": "dried basil", "id": 2003},
    {"name": "dried cherries", "id": 93822},
    {"name": "dried porcini mushrooms", "id": 10011268},
    {"name": "dried rubbed sage", "id": 1002038},
    {"name": "dried thyme", "id": 2042},
    {"name": "dried tomatoes", "id": 11955}
];

export default ingredientData;
