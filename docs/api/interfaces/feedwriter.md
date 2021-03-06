---
id: "feedwriter"
title: "Interface: FeedWriter"
sidebar_label: "FeedWriter"
sidebar_position: 0
custom_edit_url: null
---

FeedWriter is an interface for updating feeds

## Hierarchy

- [`FeedReader`](feedreader.md)

  ↳ **`FeedWriter`**

## Properties

### owner

• `Readonly` **owner**: [`HexEthAddress`](../types/utils.eth.hexethaddress.md)

#### Inherited from

[FeedReader](feedreader.md).[owner](feedreader.md#owner)

#### Defined in

[bee-js/src/types/index.ts:266](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L266)

___

### topic

• `Readonly` **topic**: [`Topic`](../types/topic.md)

#### Inherited from

[FeedReader](feedreader.md).[topic](feedreader.md#topic)

#### Defined in

[bee-js/src/types/index.ts:267](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L267)

___

### type

• `Readonly` **type**: ``"sequence"`` \| ``"epoch"``

#### Inherited from

[FeedReader](feedreader.md).[type](feedreader.md#type)

#### Defined in

[bee-js/src/types/index.ts:265](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L265)

## Methods

### download

▸ **download**(`options?`): `Promise`<`FetchFeedUpdateResponse`\>

Download the latest feed update

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `FeedUpdateOptions` |

#### Returns

`Promise`<`FetchFeedUpdateResponse`\>

#### Inherited from

[FeedReader](feedreader.md).[download](feedreader.md#download)

#### Defined in

[bee-js/src/types/index.ts:271](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L271)

___

### upload

▸ **upload**(`postageBatchId`, `reference`, `options?`): `Promise`<[`Reference`](../types/reference.md)\>

Upload a new feed update

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postageBatchId` | `string` \| [`BatchId`](../types/batchid.md) | Postage BatchId to be used to upload the data with |
| `reference` | [`Reference`](../types/reference.md) \| `ChunkReference` | The reference to be stored in the new update |
| `options?` | `FeedUploadOptions` | Additional options like `at` |

#### Returns

`Promise`<[`Reference`](../types/reference.md)\>

Reference that points at Single Owner Chunk that contains the new update and pointer to the updated chunk reference.

#### Defined in

[bee-js/src/types/index.ts:303](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L303)
