import titleCase from "../src/title_case.js";
import { expect } from "chai"; 

describe("Title case", () => {
    it("it will return 0 when it is no argument", () => {
        expect(titleCase("")).to.equal("");
    })
  
    it("it will return the string to be in title case for each word", () => {
      expect(titleCase("a clash of KINGS")).to.equal("A Clash Of Kings")
    })
  
    it("it will return the string to be in title case but not the minor words if they are not the first word in the string", () => {
      const originalStr = "a clash of KINGS";
      const minorWords = "a an the of";

      expect(titleCase(originalStr, minorWords)).to.equal("A Clash of Kings")
    })
  
    it("it will return the string to be in title case but not the minor words if they are not the first word in the string", () => {
      const originalStr = "THE WIND IN THE WILLOWS";
      const minorWords = "The In";

      expect(titleCase(originalStr, minorWords)).to.equal("The Wind in the Willows")
    })
})