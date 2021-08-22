import * as RelayProvider from "./RelayProvider"
// @ponicode
describe("getChildContext", () => {
    let inst: any

    beforeEach(() => {
        inst = new RelayProvider.default()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.getChildContext()
        }
    
        expect(callFunction).not.toThrow()
    })
})
