var sodium = require('sodium-native')

var password = Buffer.from('secret')
var hash = Buffer.allocUnsafe(sodium.crypto_pwhash_STRBYTES)
sodium.crypto_pwhash_str(hash, password,
                         sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
                         sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE)
