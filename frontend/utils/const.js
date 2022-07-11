import {clusterApiUrl , PublicKey} from "@solana/web3.js";
import tiktok from './tiktok_clone.json'

export const SOLANA_HOST =clusterApiUrl('devnet')
export const TIKTOK_PROGRAM_ID = new PublicKey(
    "7qHT4dA8gP7CwGzM4QEQbDzwvUsYtNe9CNeKvc9WEpzx"
)

export const TIKTOK_IDL = tiktok    