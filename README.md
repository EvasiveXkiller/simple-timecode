<a name="Timecode"></a>

# simple-timecode
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