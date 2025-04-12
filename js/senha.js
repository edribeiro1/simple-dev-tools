const tamanho_senha = document.getElementById('tamanho_senha');
const valor_tamanho_senha = document.getElementById('valor_tamanho_senha');

tamanho_senha.addEventListener('input', () => {
    valor_tamanho_senha.value = tamanho_senha.value;
});

const input_senha = document.getElementById('key_senha_1');
const btn_show = document.getElementById('btn-show');
const img_show_senha_1 = document.getElementById('img_show_senha_1');

btn_show.addEventListener('click', () => {
  const is_password = input_senha.type === 'password';
  input_senha.type = is_password ? 'text' : 'password';
  const closed_eye = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IB2cksfwAAAX9JREFUeNq9k0srhFEYx8/CzLm8886E3C8plGwUipRZSjasXEJhqax9ApeFvaLkGyhlIz4AYqOQsnAJkVkg2bj8nt6zmQVTs5in/p1znuf/fy7nPa8qpIXW2vm81caYNWPsck5iLBa0QV6FfA7ewDu4kjWZTJb8KXTOVRnjNiF+gRvaHRVfGIalnA8kqdZ2BWwRq8kSx+PxVhERPGa9TqVSxcob5G6JRVPYC3AE7knersS01s04HoiOs+4hGI78boDzLfgk8ZxPNuI5Y6KhcItic4h4hrjsM0EQVPj9HfgBrxRpFF8ikSgXjr/UaemGjTujnSEveoRU5gmnnL/pZBbOou+gTipHY7tB0SrEnSLUOuiHsI1wQggEF2R2zg0g7ZNOCYeO+og9oe1QPtCL44V1Ry4RUr3MLxeovDFapRSKithn1p6sL4Gjlqq7fu4M2MddRJVqEk+KWGLyGemg6b8Xl4b4QcIuyCf+IV2SfCOqmsMgL5FkXeVr/ocJVaHsFwAjUEYq7jKdAAAAAElFTkSuQmCC";
  const open_eye = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IB2cksfwAAAT1JREFUeNrdkk8rRVEUxU8G95x7rptkgIE/JTIwoPT8+QAGjF5MmSlmPoQxn0AGMjbDQL4GQ0mvUAihV1y/1d2DdxVlJrtWZ9211t77vHev+4cVY5wIIRyGkL6AD/AujnaEN/ltY5qm/QT3wFOJuOq9HwHD4mgFeAT7DBusNCdJ+xjGFcFdBfM87/q6QBreDZkdzkaWZd1mdXaU08My56n3ccFuNMtzUx58RhrevDIM2ZTO7YYc5IzmFQW0gck9xosWNKVpK/zWFmzAzxW84GHJmhoMGzD+1jpEmjxlxNk+B7/U1HG75iLnCWfdNkxZ8yu8ZlpdGfspBW+l15nRp6t5n27DH8xQZQYnTU1ktjiv9R+51tLrwjwA92UwridJMiodvob2DO6Ukf7T91CrfkiCeDjGm3a/qLYK/7P1CZJtTkc/4/kUAAAAAElFTkSuQmCC";
  img_show_senha_1.src = is_password ? open_eye : closed_eye;
});

function md5(e) {
    function h(a, b) {
        var c, d, e, f, g;
        e = a & 2147483648;
        f = b & 2147483648;
        c = a & 1073741824;
        d = b & 1073741824;
        g = (a & 1073741823) + (b & 1073741823);
        return c & d ? g ^ 2147483648 ^ e ^ f : c | d ? g & 1073741824 ? g ^ 3221225472 ^ e ^ f : g ^ 1073741824 ^ e ^ f : g ^ e ^ f
    }

    function k(a, b, c, d, e, f, g) {
        a = h(a, h(h(b & c | ~b & d, e), g));
        return h(a << f | a >>> 32 - f, b)
    }

    function l(a, b, c, d, e, f, g) {
        a = h(a, h(h(b & d | c & ~d, e), g));
        return h(a << f | a >>> 32 - f, b)
    }

    function m(a, b, d, c, e, f, g) {
        a = h(a, h(h(b ^ d ^ c, e), g));
        return h(a << f | a >>> 32 - f, b)
    }

    function n(a, b, d, c, e, f, g) {
        a = h(a, h(h(d ^ (b | ~c), e), g));
        return h(a << f | a >>> 32 - f, b)
    }

    function p(a) {
        var b = "",
            d = "",
            c;
        for (c = 0; 3 >= c; c++) d = a >>> 8 * c & 255, d = "0" + d.toString(16), b += d.substr(d.length - 2, 2);
        return b
    }
    var f = [],
        q, r, s, t, a, b, c, d;
    e = function(a) {
        a = a.replace(/\r\n/g, "\n");
        for (var b = "", d = 0; d < a.length; d++) {
            var c = a.charCodeAt(d);
            128 > c ? b += String.fromCharCode(c) : (127 < c && 2048 > c ? b += String.fromCharCode(c >> 6 | 192) : (b += String.fromCharCode(c >> 12 | 224), b += String.fromCharCode(c >> 6 & 63 | 128)), b += String.fromCharCode(c & 63 | 128))
        }
        return b
    }(e);
    f = function(b) {
        var a, c = b.length;
        a = c + 8;
        for (var d = 16 * ((a - a % 64) / 64 + 1), e = Array(d - 1), f = 0, g = 0; g < c;) a = (g - g % 4) / 4, f = g % 4 * 8, e[a] |= b.charCodeAt(g) << f, g++;
        a = (g - g % 4) / 4;
        e[a] |= 128 << g % 4 * 8;
        e[d - 2] = c << 3;
        e[d - 1] = c >>> 29;
        return e
    }(e);
    a = 1732584193;
    b = 4023233417;
    c = 2562383102;
    d = 271733878;
    for (e = 0; e < f.length; e += 16) q = a, r = b, s = c, t = d, a = k(a, b, c, d, f[e + 0], 7, 3614090360), d = k(d, a, b, c, f[e + 1], 12, 3905402710), c = k(c, d, a, b, f[e + 2], 17, 606105819), b = k(b, c, d, a, f[e + 3], 22, 3250441966), a = k(a, b, c, d, f[e + 4], 7, 4118548399), d = k(d, a, b, c, f[e + 5], 12, 1200080426), c = k(c, d, a, b, f[e + 6], 17, 2821735955), b = k(b, c, d, a, f[e + 7], 22, 4249261313), a = k(a, b, c, d, f[e + 8], 7, 1770035416), d = k(d, a, b, c, f[e + 9], 12, 2336552879), c = k(c, d, a, b, f[e + 10], 17, 4294925233), b = k(b, c, d, a, f[e + 11], 22, 2304563134), a = k(a, b, c, d, f[e + 12], 7, 1804603682), d = k(d, a, b, c, f[e + 13], 12, 4254626195), c = k(c, d, a, b, f[e + 14], 17, 2792965006), b = k(b, c, d, a, f[e + 15], 22, 1236535329), a = l(a, b, c, d, f[e + 1], 5, 4129170786), d = l(d, a, b, c, f[e + 6], 9, 3225465664), c = l(c, d, a, b, f[e + 11], 14, 643717713), b = l(b, c, d, a, f[e + 0], 20, 3921069994), a = l(a, b, c, d, f[e + 5], 5, 3593408605), d = l(d, a, b, c, f[e + 10], 9, 38016083), c = l(c, d, a, b, f[e + 15], 14, 3634488961), b = l(b, c, d, a, f[e + 4], 20, 3889429448), a = l(a, b, c, d, f[e + 9], 5, 568446438), d = l(d, a, b, c, f[e + 14], 9, 3275163606), c = l(c, d, a, b, f[e + 3], 14, 4107603335), b = l(b, c, d, a, f[e + 8], 20, 1163531501), a = l(a, b, c, d, f[e + 13], 5, 2850285829), d = l(d, a, b, c, f[e + 2], 9, 4243563512), c = l(c, d, a, b, f[e + 7], 14, 1735328473), b = l(b, c, d, a, f[e + 12], 20, 2368359562), a = m(a, b, c, d, f[e + 5], 4, 4294588738), d = m(d, a, b, c, f[e + 8], 11, 2272392833), c = m(c, d, a, b, f[e + 11], 16, 1839030562), b = m(b, c, d, a, f[e + 14], 23, 4259657740), a = m(a, b, c, d, f[e + 1], 4, 2763975236), d = m(d, a, b, c, f[e + 4], 11, 1272893353), c = m(c, d, a, b, f[e + 7], 16, 4139469664), b = m(b, c, d, a, f[e + 10], 23, 3200236656), a = m(a, b, c, d, f[e + 13], 4, 681279174), d = m(d, a, b, c, f[e + 0], 11, 3936430074), c = m(c, d, a, b, f[e + 3], 16, 3572445317), b = m(b, c, d, a, f[e + 6], 23, 76029189), a = m(a, b, c, d, f[e + 9], 4, 3654602809), d = m(d, a, b, c, f[e + 12], 11, 3873151461), c = m(c, d, a, b, f[e + 15], 16, 530742520), b = m(b, c, d, a, f[e + 2], 23, 3299628645), a = n(a, b, c, d, f[e + 0], 6, 4096336452), d = n(d, a, b, c, f[e + 7], 10, 1126891415), c = n(c, d, a, b, f[e + 14], 15, 2878612391), b = n(b, c, d, a, f[e + 5], 21, 4237533241), a = n(a, b, c, d, f[e + 12], 6, 1700485571), d = n(d, a, b, c, f[e + 3], 10, 2399980690), c = n(c, d, a, b, f[e + 10], 15, 4293915773), b = n(b, c, d, a, f[e + 1], 21, 2240044497), a = n(a, b, c, d, f[e + 8], 6, 1873313359), d = n(d, a, b, c, f[e + 15], 10, 4264355552), c = n(c, d, a, b, f[e + 6], 15, 2734768916), b = n(b, c, d, a, f[e + 13], 21, 1309151649), a = n(a, b, c, d, f[e + 4], 6, 4149444226), d = n(d, a, b, c, f[e + 11], 10, 3174756917), c = n(c, d, a, b, f[e + 2], 15, 718787259), b = n(b, c, d, a, f[e + 9], 21, 3951481745), a = h(a, q), b = h(b, r), c = h(c, s), d = h(d, t);
    return (p(a) + p(b) + p(c) + p(d)).toLowerCase()
};

document.getElementById('btn-copy').addEventListener('click', () => {
    let senha_gerada = document.getElementById("senha_gerada").value;
    navigator.clipboard.writeText(senha_gerada);
});

document.getElementById('gerar_senha').addEventListener('click', () => {
    document.getElementById('senha_gerada').value = '';
    const tamanho_senha = parseInt(document.getElementById('tamanho_senha').value);
    const key_senha_1 = document.getElementById('key_senha_1').value;
    const key_senha_2 = document.getElementById('key_senha_2').value;
    const key_senha_3 = document.getElementById('key_senha_2').value;
    const key = key_senha_1.toLowerCase().trim() + key_senha_2.toLowerCase().trim() + key_senha_3.toLowerCase().trim();
    const encrypted_key = md5(key);
    const last_numbers = getLastNumbersForKey(encrypted_key);
    const add_letter = String.fromCharCode(65 + (parseInt(last_numbers) % 26));
    const senha_gerada = encrypted_key.slice(0, tamanho_senha - 2) + add_letter + '*';
    document.getElementById('senha_gerada').value = senha_gerada;
});

function getLastNumbersForKey(key) {
    let numbers = '';

    for (let i = key.length - 1; i >= 0; i--) {
        if (!isNaN(key[i]) && key[i] !== ' ') {
            numbers = key[i] + numbers;
        if (numbers.length === 2) break;
        }
    }

    return numbers;
}
