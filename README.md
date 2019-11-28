# [starkString](http://github.com/hosseinmd/starkString)
A simple JavaScript library To use the most commonly used string operations.  
Include functions of `persian.js`
[![Build Status](https://travis-ci.org/hosseinmd/starkString.svg?branch=master)](https://travis-ci.org/hosseinmd/starkString)

## TOC

* [install](#install)
* [Functions](#Functions)
* [Contributing](#Contributing)


## install
`$ yarn add starkString`

## Functions

### 1) Convert Arabic characters to Persian

Used for converting Arabic characters to Persian.

Example:
```javascript
starkString(" علي ").trim().persianChar().toString(); //returns: علی
```
----------

### 2) Convert to English numbers from Persian and arabic Number

Used for converting Persian and arabic Number to English numbers.

Example:
```javascript
starkString("۳۴۵ ٤٥").englishNumber().toString(); //returns: 345 45
```
----------

### 3) Convert to Persian numbers from Arabic and English Number

Used for converting Arabic and English numbers to Persian.

Example:
```javascript
starkString("٣٤٥ 78").persianNumber().toString(); //returns: ۳۴۵ ۷۸
```
----------

### 4) Convert to Arabic numbers from English and Persian Number

Used for converting Arabic and Persian numbers to English.

Example:
```javascript
starkString("345").arabicNumber().toString(); //returns:  ٣٤٥
```
----------

### 6) Decode Percent-encoding Characters in URLs

Used to convert unreadable Persian characters in URL to readable characters.

Example:
```javascript
starkString("https://fa.wikipedia.org/wiki/%D8%B5%D9%81%D8%AD%D9%87%D9%94_%D8%A7%D8%B5%D9%84%DB%8C").fixURL().toString(); //returns https://fa.wikipedia.org/wiki/صفحهٔ_اصلی
```
----------

### 7) Change keyboard layout

Used for converting Persian char to English char.

Example:
```javascript
starkString("لخخلمث").switchKey().toString(); //returns: google
```
----------

### 8) Convert numbers to words

Used for representing numbers as Persian words.

Example:
```javascript
starkString("1372").digitsToWords().toString(); //returns: یک هزار و سیصد و هفتاد و دو
```
----------

### 9) Zero-width non-joiner correction

Example:
```javascript
starkString("آمده ای ولی من رفته ام و می آییم").halfSpace().toString(); //returns: آمده‌ای ولی من رفته‌ام و می‌آییم
```
----------

### 10) Integer number validation

Whether is value integer

Example:
```javascript
starkString("344327905").isInteger() // return true

starkString("34432.7905").isInteger() // return false
starkString("g344327905").isInteger() // return false
```
----------

### 11) bank card number validation

Whether is value bank card

Example:
```javascript
starkString("6104337638408961").isValidBankCard() // return true
```
----------

### 12) convert number to currency format

convert english number to currency format

Example:
```javascript
starkString("120000.00").currency().toString() // return 120,000.00

starkString("120000").currency().persianNumber().toString() // return ۱۲۰,۰۰۰
```
----------

### 13) Parse Numbers

Remove anything expect numbers

Example:
```javascript
starkString(" amount 12,000 dollar").parseNumber().toString() // return 12000
```
----------

### 14) security string

convert any char to star ("*")

Example:
```javascript
starkString("password").security().toString() // return ********
```
----------

### Chainable using

You can use all of the functions together with one StarkString instance (in v0.3).

Example:
```javascript
starkString("علي٤2465").persianChar().englishNumber().persianNumber().toString(); //returns: علی۴۲۴۶۵
```
----------

## Contributing

This is a open-source project. Fork the project, complete the code and send pull request.
