import { AbiItem } from 'web3-utils'

export const events: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint64',
        name: 'connectorType',
        type: 'uint64',
      },
      {
        indexed: true,
        internalType: 'uint64',
        name: 'connectorID',
        type: 'uint64',
      },
      {
        indexed: true,
        internalType: 'uint64',
        name: 'accountID',
        type: 'uint64',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'eventCode',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'eventData',
        type: 'bytes',
      },
    ],
    name: 'LogEvent',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_connectorType',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_connectorID',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: '_eventCode',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: '_eventData',
        type: 'bytes',
      },
    ],
    name: 'emitEvent',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'instaList',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
