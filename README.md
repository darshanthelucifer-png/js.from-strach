================================================================
           JAVASCRIPT BASICS NOTES - README
================================================================

----------------------------------------------------------------
1. VARIABLES IN JAVASCRIPT
----------------------------------------------------------------

const
  - Value cannot be changed after declaration.
  - Used for fixed values.

  const account_Id = 938076;
  // account_Id = 3  ❌ Error

----

let
  - Value can be changed.
  - Preferred way to declare variables.

  let account_Email = "darshan@gmail.com";
  account_Email = "newmail@gmail.com";  // ✅ Allowed

----

var
  - Value can be changed.
  - Avoid using var because of scope issues.

  var account_Password = "12345";
  account_Password = "67890";  // ✅ Allowed

----

Without Keyword
  account_City = "Bangalore";
  - JavaScript creates a global variable.
  - Not recommended.

----------------------------------------------------------------
2. DISPLAY OUTPUT
----------------------------------------------------------------

console.log()
  - Prints output in the console.

  console.log("Hello World");
  console.log(3 + 4);

----

console.table()
  - Displays data in table format.

  console.table([
      account_Id,
      account_Email,
      account_Password,
      account_City
  ]);

----------------------------------------------------------------
3. STRICT MODE
----------------------------------------------------------------

  "use strict";

  - Treats JavaScript as modern JavaScript.
  - Helps catch errors.

----------------------------------------------------------------
4. DATA TYPES
----------------------------------------------------------------

  Number       ->  let age = 18;
  String       ->  let name = "Darshan";
  Boolean      ->  let isLoggedIn = false;
  Undefined    ->  let state;         // Output: undefined
  Null         ->  let value = null;  // Represents an empty value.
  Symbol       ->  Used for unique identifiers.
  Object       ->  Stores key-value pairs.

  let person = {
      name: "Darshan",
      age: 18
  };

----------------------------------------------------------------
5. CHECKING DATA TYPE
----------------------------------------------------------------

  typeof

  console.log(typeof "Darshan");   // Output: string

  Examples:
  console.log(typeof "");          // string
  console.log(typeof null);        // object  (JavaScript bug)
  console.log(typeof undefined);   // undefined

----------------------------------------------------------------
6. TYPE CONVERSION
----------------------------------------------------------------

String to Number:
  let score = "100";
  let valueInNumber = Number(score);
  // Output: 100

Invalid Conversion:
  let score = "100abc";
  let valueInNumber = Number(score);
  console.log(valueInNumber);
  // Output: NaN  (NaN = Not a Number)

Boolean Conversion:
  Boolean(1);           // true
  Boolean(0);           // false
  Boolean("");          // false
  Boolean("Darshan");   // true

  Example:
  let isLoggedIn = "dd";
  let booleanIsLoggedIn = Boolean(isLoggedIn);
  console.log(booleanIsLoggedIn);
  // Output: true

Number to String:
  let someNumber = 33;
  let stringNumber = String(someNumber);
  console.log(typeof stringNumber);
  // Output: string

----------------------------------------------------------------
7. OPERATORS
----------------------------------------------------------------

  Addition        ->  console.log(2 + 6);      // 8
  Subtraction     ->  console.log(3 - 5);      // -2
  Multiplication  ->  console.log(3 * 5);      // 15
  Exponent        ->  console.log(3 ** 5);     // 243
  Division        ->  console.log(20 / 3);     // 6.6666666667
  Modulus         ->  console.log(2 % 3);      // 2

----------------------------------------------------------------
8. STRING CONCATENATION
----------------------------------------------------------------

  let str1 = "Hello";
  let str2 = "Darshan";
  let str3 = str1 + str2;
  console.log(str3);
  // Output: HelloDarshan

----------------------------------------------------------------
9. STRING AND NUMBER OPERATIONS
----------------------------------------------------------------

  console.log("1" + 2);        // 12
  console.log(1 + "2");        // 12
  console.log("1" + 2 + 4);   // 124
  console.log(1 + 2 + "2");   // 32

  Reason:
  - Numbers are added first.
  - Then converted to string.

----------------------------------------------------------------
10. OPERATOR PRECEDENCE
----------------------------------------------------------------

  console.log(3 + 5 * 4 % 3);

  Calculation:
    5 * 4 = 20
    20 % 3 = 2
    3 + 2 = 5
  // Output: 5

  Using brackets:
  console.log((3 + 5) * 4 % 3);
  // Output: 2

----------------------------------------------------------------
11. UNARY PLUS OPERATOR
----------------------------------------------------------------

  console.log(+true);   // Output: 1
  console.log(+"");     // Output: 0

----------------------------------------------------------------
12. MULTIPLE ASSIGNMENT
----------------------------------------------------------------

  let num1, num2, num3;
  num1 = num2 = num3 = 2 + 2;

  // num1 = 4
  // num2 = 4
  // num3 = 4

----------------------------------------------------------------
13. INCREMENT OPERATORS
----------------------------------------------------------------

Prefix Increment:
  let gameCounter = 180;
  ++gameCounter;
  // Value becomes: 181

Postfix Increment:
  gameCounter++;
  // Value becomes: 182

  console.log(gameCounter);  // 182

================================================================
           IMPORTANT INTERVIEW POINTS
================================================================

  Concept               Output
  -------               ------
  typeof null           "object"
  typeof undefined      "undefined"
  Number("33")          33
  Number("33abc")       NaN
  Boolean("")           false
  Boolean("Darshan")    true
  "1" + 2               "12"
  1 + 2 + "2"           "32"
  +true                 1
  +""                   0

================================================================
               BEST PRACTICES
================================================================

  ✅ Use const when value won't change.
  ✅ Use let when value may change.
  ❌ Avoid var because of scope issues.
  ✅ Write clean and readable code.
  ✅ Use "use strict"; in modern JavaScript projects.

================================================================