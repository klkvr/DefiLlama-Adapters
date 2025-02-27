const { compoundExports2 } = require('../helper/compound')
const { mergeExports } = require('../helper/utils')

module.exports = {
  klaytn: compoundExports2({ comptroller: '0xEE3Db1711ef46C04c448Cb9F5A03E64e7aa22814', cether: '0xac6a4566d390a0da085c3d952fb031ab46715bcf'}),
  wemix: compoundExports2({ comptroller: '0xBA5E3f89f57342D94333C682e159e68Ee1Fc64De', cether: '0xD42ad8346d14853EB3D30568B7415cF90C579D83'}),
  manta: mergeExports([
    compoundExports2({ comptroller: '0x9f53Cd350c3aC49cE6CE673abff647E5fe79A3CC', cether: '0xE103F874B2D144C5B327FA3d57069Bb19c0779e2'}),
    compoundExports2({ comptroller: '0x3413Dc597aE3bE40C6f10fC3D706b884eaCF470A'})
  ])
} 