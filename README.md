<a name="Timecode"></a>
# simple-timecode

A simple tool to convert timecodes

<div>
   <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/EvasiveXkiller/simple-timecode/Tests?label=Tests&logo=Test">
   <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/EvasiveXkiller/simple-timecode">
   <img alt="GitHub" src="https://img.shields.io/github/license/EvasiveXkiller/simple-timecode">
</div>
<br>

> What do you expect?

## Timecode
Class to handle static function

**Kind**: global class  

* [Timecode](#Timecode)
    * [.MillisecondsToTime(ms)](#Timecode.MillisecondsToTime) ⇒ <code>string</code>
    * [.TimeToMilliseconds(time)](#Timecode.TimeToMilliseconds) ⇒ <code>number</code>

<a name="Timecode.MillisecondsToTime"></a>

### Timecode.MillisecondsToTime(ms) ⇒ <code>string</code>
Converts millisecond to standard time code

**Kind**: static method of [<code>Timecode</code>](#Timecode)  
**Returns**: <code>string</code> - Converted Timecode Eg. 2:55:55  

| Param | Description |
| --- | --- |
| ms | Milliseconds in number |

**Example**  
```js
const time = Timecode.MillisecondsToTime(32000000)
```
<a name="Timecode.TimeToMilliseconds"></a>

### Timecode.TimeToMilliseconds(time) ⇒ <code>number</code>
Converts a standard time code to milliseconds.

**Kind**: static method of [<code>Timecode</code>](#Timecode)  
**Returns**: <code>number</code> - Milliseconds  

| Param | Description |
| --- | --- |
| time | The time code. Eg. 2:55:55 |

**Example**  
```js
const ms = Timecode.TimeToMilliseconds("4:30:00");
```
## Tests
Tests are written in [tape](https://github.com/substack/tape)

To run them, just do:
```shell
npm run test
```

## Contributing
Any is welcomed. Just open a PR.


