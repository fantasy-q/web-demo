/** 
  * offset = content + padding + border
  * client = content + padding
  * scroll = content
*/

const TEXTAREA = {
  border: 1,
  padding: 5,
  margin: 10,
  getOneSide: function () {
    return this.border + this.margin + this.padding;
  }
}