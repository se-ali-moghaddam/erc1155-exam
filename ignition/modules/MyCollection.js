const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('MyCollectionModule', m => {
    const MyCollectionModule = m.contract('MyCollection', [
        '0x21c362525326B3Fcb8E30a5966cb1e09C09BaDC9',
        '0x21c362525326B3Fcb8E30a5966cb1e09C09BaDC9',
        '0x21c362525326B3Fcb8E30a5966cb1e09C09BaDC9'
    ]);

    return { MyCollectionModule };
});