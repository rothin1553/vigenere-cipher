const alphabet = "abcdefghijklmnopqrstuvwxyz";

function ord(chr)
{
    return chr.toLowerCase().charCodeAt(0);
}

function __encode(key, input, decode=false)
{
    let offset = -1;

    if(input.match(/[a-z]/i) && key.match(/[a-z]/i))
    {
        offset = (decode ?  ord(input) - ord(key) : ord(input) + ord(key) - 194);
        offset = offset < 0 ? offset + 26 : offset % 26;
    }

    return offset === -1 ? input : alphabet[offset] ;
}

function encode(key, input, decode=false)
{
    let value = "";
    let key_index = 0;
    for(let i = 0; i < input.length; i++)
    {
        value += __encode(key[key_index], input[i], decode);
        key_index = key_index+1 < key.length ? key_index+1 : 0;
    }
    return value;
}