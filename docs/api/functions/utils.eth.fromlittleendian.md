---
id: "utils.eth.fromlittleendian"
title: "Function: fromLittleEndian"
sidebar_label: "fromLittleEndian"
custom_edit_url: null
---

[Utils](../modules/utils.md).[Eth](../modules/utils.eth.md).fromLittleEndian

▸ **fromLittleEndian**(`littleEndian`, `pad?`): [`HexString`](../types/utils.hex.hexstring.md) \| `never`

Convert little-endian hex or number to big-endian
Note: Before conversion it is automatically padded to even length hexstring

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `littleEndian` | `number` \| `string` \| [`HexString`](../types/utils.hex.hexstring.md) | `undefined` | Little-endian hex string or number to convert |
| `pad` | `number` | `2` | Length to which the string should be padded before conversion (defaul: 2) |

#### Returns

[`HexString`](../types/utils.hex.hexstring.md) \| `never`

big-endian encoded hexstring

#### Defined in

[bee-js/src/utils/eth.ts:139](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/utils/eth.ts#L139)
