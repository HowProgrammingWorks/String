# Exercises

## №1 Palindrome

Implement the `isPalindrome (str: string)` function, which allows you to return true,
if the string is a palindrome, and false if not.

In this case, spaces and punctuation marks must be considered.

For example:
```js
isPalindrome('racecar') === true
isPalindrome('table') === false
```

## №2 Format number to a human-readable string

Implement the function `humanizeFormat (num: number)`, which allows you to format a number
into a human-readable string with the correct suffix, such as `1st, 2nd, 3rd, 4th`.

For example:
```js
humanizeFormat() === 'undefined'
humanizeFormat(1) === '1st'
humanizeFormat(3) === '3rd'
humanizeFormat(13) === '13th'
humanizeFormat(302) === '302nd'
```

## №3 Emoji

Implement the function `getEmojisFromText (textWithEmoji: string)`, which takes a string,
which consists of unicode emoji `'0x9749, 0x9752, 0x9917, 0x9925, 0x9935'`
and returns a string of sorted emojis.

For example:
```js
getEmojisFromText('0x9749, 0x9752, 0x9917, 0x9925, 0x9935') --> '⛏ ⛅ ⚽ ☘ ☕'
getEmojisFromText('0x9975, 0x9977, 0x9917, 0x9968, 0x9935, 0x9978') --> '⛺ ⛏ ⛰ ⚽ ⛹ ⛷'
```

## №4 Anagram

Anagrams are words that are obtained when rearranging letters or sounds in places in the original word.
For example, finder and Friend.

Implement the `isAnagram (first: string, second: string)` function, which checks
whether two lines are anagrams, and the case of letters does not matter.
Only characters are taken into account, spaces or any other signs `^,., *,! ... `are not taken into account.

For example:
```js
isAnagram('Eleven plus Two', 'Twelve plus one'); --> true
isAnagram('finder', 'Friend') --> true
isAnagram('finder', 'Fri---end') --> true
isAnagram('fi^nd&e^r', 'Fri---end') --> true
isAnagram('hello', 'bye') --> false
```

## №5 Acronym

An acronym is a word or name formed from the initial components of a longer name or phrase,
usually using individual initial letters, as in NATO (North Atlantic Treaty Organization) or
EU (European Union), but sometimes using syllables, as in Benelux (Belgium, Netherlands and Luxembourg),
or a mixture of the two, as in radar (RAdio Detection And Ranging).

Implement the function `convertToAcronim (words: string)`,
which translates the phrase into an abbreviation.

For example:
```js
convertToAcronim('GNU Image Manipulation Program'); --> 'GIMP'
convertToAcronim('Kyiv Polytechnic Institute'); --> 'KPI'
convertToAcronim('First In, First Out'); --> 'FIFO'
convertToAcronim('Complementary metal-oxide semiconductor'); --> 'CMOS'
```

## №6 Weirdcase in Ruby

Write a function `toWeirdCase(text: string)` that accepts a string, and returns the same string with all even indexed
characters in each word upper cased, and all odd indexed characters in each word lower cased.
The indexing just explained is zero based, so the zero-ith index is even,
therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces `(' ')`.
Spaces will only be present if there are multiple words.
Words will be separated by a single space `(' ')`.

For example:
```js
toWeirdCase('String'); --> 'StRiNg'
toWeirdCase('Weird string case'); --> 'WeIrD StRiNg CaSe'
```