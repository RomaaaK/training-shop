const product = {
    women : [
        {
            id: 1,
            name: "Women's tracksuit Q109_01",
            imgUrl: 'https://s3-alpha-sig.figma.com/img/2e75/be52/f4849dc7536a38a00c525731591b48b5?Expires=1646006400&Signature=Yi-Ked5FZW3mKEoUrvu5ZOaxctbu6I3lxCQ0sF3OP4L4UoE4pgflzycE5vsOWzBVs-J7-sznZle7aPztMjuwYebbSp18rhHcd3njFwn~An3kR6mdic4nIftYk3wwU-SC-OmmkskFxjujdK4UZGZakrSkF8Lsl1-mnvi5kB7wI7T--q-VuNwRTKlM-Da4e6kIFXSm~PGNDHaRJ4pYXKhOHnROt4yTlmTzvGh6gTls14ldeY000NZ~GN5AGHp3UzkIp9YkEdrLNyCziMk3QHusdB~ViRWnzPGsUbc1n9ukOtuExn7whHJTFjtrGFbP7KI1fmA3l4Rjkd7yEfP-NYegrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price: 30.00,
            sale: 0,
            rating: 4,
        },
        {
            id: 2,
            name: "Women's tracksuit Q109_02",
            imgUrl: 'https://s3-alpha-sig.figma.com/img/ea4a/5314/f8cb223aec2bf8ccf78c08edc51e441e?Expires=1646006400&Signature=IwuWrU3rqp5sFjgvhwfmTQHCRBH5H6vhKRcrBls72RmXdoem9MVv8xK9KrAPtb2TsW4oyJeabzM-Shiz-EOGQjBuR2zoAnzM6TDscvv6PULXX7Cbn6Uei89R2owRw8F~Xv2KrgEaq5eHeQotpz1Ccr9qxBhe5j1thvtBMqcoh4zzPvMOOWMSEhM2UH0U3g-3eSGVuYhE1TiqO5Wvy5oVVQcsJUi35zxkQc4Kxs~zZ-7uSbPYHBP4-fNIm3Aqni4yFM2EsX5a2fZ7nBWQyzV1HhRACom-Dl3KRjulVeWyEJaYLnfGDkf~f0iKI8RaeAaQGdvPlhHshMDSF8gjCsZhdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price: 60.00,
            sale: 50,
            rating: 4,
        },
        {
            id: 3,
            name: "Women's tracksuit Q109_03",
            imgUrl: 'https://s3-alpha-sig.figma.com/img/bdcd/e717/a2244dfbf03e5df3c89a8f20a5eb00ef?Expires=1646006400&Signature=Vs-UN0WBFh5RkOxq5bWYzC8OdBJBMhFU~C7rj8SkhAl7yW08qnDJUh00ZAIEkOauyGQqKTxEhFq-WJpYlsuahdaYDHWxYCZk6cIQcmkew-rfvjwV8oNhM8eOsf6R0n4zWaus9tNblpPOGAG7Z-pX7pA6RZFJViSRuGJuUK25UFb1NESJi-CATKrH8UcaeHVuNzg20F74T~wHTCC4IUojULnwXp-Rd0pKq9pcSVv1yIiQh1~AiMJTxCaKRdNlUOaM91buR-4mziYudit2G2dtWDEBcbBrd0dFF3pz3sxjD86miugP0JQgyFQmHP8C6IP3Fb3zPFKdU2QYGif4Qr4vqg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price: 30.00,
            sale: 0,
            rating: 4,
        },
        {
            id: 4,
            name: "Women's tracksuit Q109_04",
            imgUrl: 'https://s3-alpha-sig.figma.com/img/056d/67ff/92fd245066520e04e1f7b7be4116d903?Expires=1646006400&Signature=V7bYy7FIwQVNFWAl3TNfhXrEk8B6kztrF4YmjWqyPq65ygGfjFMHdUf50hAscH~OObpZBQOp3eDF2HxGnQYN-c3Qshj~MxZnbD6ULme5RkWHmC0lz9DZLva0M5jpFTXORDJIqJoLhAwcAENWjW-j~7e~MPoithFlgWO8xHVMnkaGnMvXD5Vr9oQID6-31M2arkQrSCC6ckl3bPwT96tr5zqksG8QT4f0NTMvEe9O6jIhTxhyEGe5QfeFVh5mdsm9eP9Sm7V1oMOKbjAPhWTdfF6gufGgoJnJNMMDT4k~YvjBhhVX8XaH2LAARe0cd2EaBdhUyHFKXmkXODDJSxW~4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price: 30.00,
            sale: 0,
            rating: 4,
        },
        {
            id: 5,
            name: "Women's tracksuit Q109_05",
            imgUrl: 'https://s3-alpha-sig.figma.com/img/4c25/564c/81f9b52f3b4915ba7b4b294682f2c596?Expires=1646006400&Signature=QqnB-mR30IO6yn0guZAtft02l5m2a9hjJSALXWiLAZdiq5apCE0OCo39nYcXC8nIigCBALrW~PID3Pc2GqUZrhuw4p1xbu1LT-Lk7vAYJb4aiXuV0F9UQsZlsTavQf9ykSLSJPvZxfjuGFm0RCG7kIUwd1iysU1dtvVhPrRJDchnVuy3DeG4UmxHA6yCR8UVGuLpz2zbF4mzmYvIy7sTZomJpTKAZ1Y717jtgMSmE16Lpx~eVj-aVsjEygFYQnLedOKMbV1~wmSFNMFXJV~~2k8bQTIgRe2ilfs7vwVluAtsV2VPZ-e~hyfJsxqbPGYZsWPS2QT9Hdimz45VrGbkyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price: 30.00,
            sale: 0,
            rating: 4,
        },
        {
            id: 6,
            name: "Women's tracksuit Q109_06",
            imgUrl: 'https://s3-alpha-sig.figma.com/img/814f/e356/96726e2415e3eb4bf15a4e4c6886dfec?Expires=1646006400&Signature=E7RDe4vjTMTzAY-moLucHMR2CBBBWBdhqCos6uV2klSiGtt12XDMdpr4adfXMma95ddtyk8mFXNT5V3uVc64ROFjPiNK-KqNXngzxjnxZHAH6NDnYh~4BJkac8x~C1SyI-nB0nL~dt8QdxTT9SK3ggSkrgTkHTce6Cm2XjIzD2T6EdcHiJsKQkapaNPUlEgTMFMVUgyjCAkV0cT9nkGcAntzPGIOu5relwlBkoGGVpL0UlqPTZBOEetnwCIV7B5u1lhU6jW3hUwb3HTvYAAuAyLv2sUwzItgS7VosooSQHJuR-g9H1wtKQnetazTsBsLpuM5T1w-BWDL~2Lr4YBEog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price: 30.00,
            sale: 0,
            rating: 4,
        },
        {
            id: 7,
            name: "Women's tracksuit Q109_07",
            imgUrl: 'https://s3-alpha-sig.figma.com/img/fe58/29c1/4267856b83219765c610a5180ddb9e9b?Expires=1646006400&Signature=NvnFYOTVJ836QsMBl4cv56WYDmncg5GUgZW4i14t0v3p3KmfGGgH-E7USiLhc2a3aO443EvTp1XucCLUI65G50BbE3U85vUhX-R00pn2HZ~nb96EtSABvHxcuLq6E4aLoLDwSb6Bb7quAVxgIT5Z~ZoSbqQQJOHUg0XxdRZkuvysQvDt3HCGc2Ru7BzcFk18C2kY0~f-gn~R97YWz5bah3TmCE4O79zxDd~SBf8cFlIdW4J1jjXbe8twr3eIgiNPAh9GCIL~6Gca1-nYKEoF0qgkSwjmY3Uc5L8TtJmEwkEZuU3V4um-VR1npFPy6YXNZXeDsweWWmlzJAS-htOPGw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price: 30.00,
            sale: 0,
            rating: 4,
        },
        {
            id: 8,
            name: "Women's tracksuit Q109_08",
            imgUrl: 'https://s3-alpha-sig.figma.com/img/b111/c13a/bf997732a14e4fc10b7194424c3d597b?Expires=1646006400&Signature=gAGfejZUsuLfRgG2yFAlRwduDLjsnZ5l8TsiG3dWUQqOWVZonYBJRPpv~pj7ziqOyqbRoGLs1gvigyTBLlPgAVqzoblPWqiUSwvheItIgSfa4Hp4Xw2GU4BVyRCroHcDZBZJjFg5~yq14n8rjeWVQLLUhHmpw6fM~SITuGhwu9VVr6xKh-NMr0q5o3WAPgcuiHPbaqLjo829QWVEtfcq03t5whvUpXTFGC3jkzUkWXG-0N5uthooy-vk4zPb-DNNbPvxRyhkaGVAFLMtR0k26JrtID0w404pnBCOVRVHuzPn9WXYOpflrQnpzCnibY8rhqhgf5iGIeTem8sRfCW~ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price: 30.00,
            sale: 0,
            rating: 4,
        },
    ],

    men: [
        {
            id: 9,
            name: "Men's tracksuit Q109_01",
            imgUrl: 'https://s3-alpha-sig.figma.com/img/64db/ac59/5d73d50c0b0e7c488036876663b230f9?Expires=1646006400&Signature=IEHVlmMQxrqq82V5u~d6HC1NXA1omKPlzLNxIsvkb1BnUurBXQn2A5-Th7mqvYJiBpEswjVsNGzdjOwz-9jt4zDu4PGJTVo1e8d57HV0Ds0fF~DON5~sy~WqSYIibNatbYJZQwCPleLUt7wIfgpLGiXZHR6Paqz8xDNPZ09nG85wnycK4jYIcd3Z~J~jkt~4snPDcSpQ79HDU5zazLalRKLy6HTy6t6uyqcxVACF5flQipjZ3kO31~czFmadQZGeHG6N6gxUy5~TPcLdE3ruByKb0TGPlVRKs73fLd5uFTCNKE2CaBKsIN2LG5dOufZ09TeA-Y~HOeynYsLE74KlHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price: 30.00,
            sale: 0,
            rating: 4,
        },
        {
            id: 10,
            name: "Men's tracksuit Q109_02",
            imgUrl: 'https://s3-alpha-sig.figma.com/img/87c6/a945/bbcbbf27d8842c2f7dde1740d0ee16e6?Expires=1646006400&Signature=hPwMSZz5r0KJV9wZLLzfW47S73uKjVuyFAFl0ony5IFPuO3IWrNRNdwB13PR0BW7OB-SuquUNw3XV8ne19niKB1u0UwSon8u21YKP1c8DiDahU2a2xldc5OOT6bSnE~WmOzHBuz06edKB-WhymFDtZIyBeqEjbOhPI1EbKK5PsXTaOFfOAPpJjBppPKVgcTGKhyfl7hg4RnBzagJSXerzMKoOQxECTzAgUGzJsAXI8pKQ136S1-KK34H~G~K9YRzwBMRUmmVwhw1gAXQgnQd~BvLkub7w1F0v0o~zNQi0WUU-mnaVZkJ1fUj7aZxE-xb-UpYjcT5WyqWTuY906dy9g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price: 30.00,
            sale: 0,
            rating: 4,
        },
        {
            id: 11,
            name: "Men's tracksuit Q109_03",
            imgUrl: 'https://s3-alpha-sig.figma.com/img/98d0/a89c/ba07848f2d0e29eccc48587a19c732ff?Expires=1646006400&Signature=ZSfFTmhWv3tpXeVB78juTADJt8RD3q38-r1ENS7bGt8-tz6UoNyGy7x2gwX8DNxF3k2rW7iLaIUHP5QDD7ZNhiP7mpIjmpNxCB8kS04fXtD1BbZ0UIk8ArEeepUzCoXY9hKnG6RFFCUeuoUz8WTWR1XbyRr4JAYX18qw~EVr4bwMDLzsEIdOuY7qnfVrQRu4hGzeHjapZ77mXCVOjVZqsZnXVW-QEiEG8HTn~hTuviZLptSc1nzJ8ma8D4536fHO1jYhia7G49dSHOdyJArzoTGdKPpTpdIqpyPnjJW97h6pJGetmfpuPYeOC~6f-rLf5FkYl77XF3Z5ud4xduKTjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price: 30.00,
            sale: 0,
            rating: 4,
        },
        {
            id: 12,
            name: "Men's tracksuit Q109_04",
            imgUrl: 'https://s3-alpha-sig.figma.com/img/5c74/9c63/d4b69d4e5bff4ede6495b91eb7fd18b7?Expires=1646006400&Signature=BShHSuM4DemmY7CWYYBIK65tkad0bpipU6LUg43v~VGFzkxSxDgh~-P-Y83e91RcsPSMMaHa6oGre7o3dGhDfShCRpY3EEGDH-j5dntGn-DtNPDmaeTvhhqCaJuoPznnq29mBFZlMCtHR5dNTCSQLRhu4V6fUWZ2jw5pUvn0uQdkHi5u-jza79sqRDseOI2zLcmzywrWMAG1ma1TTKZA2JlVCwM2TQ4Qic4jg9mm4Y~nUxAmn8mz82geVo9gTqex7lgSMTsPbfSMrRsOT~rU~o~BDSig3clnMLI9bL5hYc1968oIIjPJU1f0TLblU4fnsPQyo7i3kDy81S4BRsbKWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price: 30.00,
            sale: 0,
            rating: 4,
        },
        {
            id: 13,
            name: "Men's tracksuit Q109_05",
            imgUrl: 'https://s3-alpha-sig.figma.com/img/126a/2649/a133a04bb236f0cca01597dc4d7fa7cf?Expires=1646006400&Signature=Q5KDUEObp3Lk3lSdCPJCD-BTa~Uh-mB6S1i89p5jS0a3gAUmicltOA2FrGWU6femNbuCUkRO7jqeiSHCn-xCVi3rH9Jo8fZLMMlQLDhpQaOlT5Y8L3cFX3CoZ0E4gPFrztVOQwBwOBTaZ33poXvFEHLR1lIYsTrd1GFCNdHFy-WIqiJHaBC0C55hBpVcVWjGP-LaEa8MPk7Bd590~tl84KTXNi2kun1DI4hp7YlrPEEyVCepy~icBZyDQh2VNotdvBaAjKMCrrsf9FiycV2vnUmy8PdM0psy6WoIffjU8~5jfPRPeMqlLdZlDekY55Ry5zYSM~rLwEw7WALC6GRT1A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price: 30.00,
            sale: 0,
            rating: 4,
        },
        {
            id: 14,
            name: "Men's tracksuit Q109_06",
            imgUrl: 'https://s3-alpha-sig.figma.com/img/a323/24ad/3195629da5cbec8ce7a7a275e1be378c?Expires=1646006400&Signature=f7nneMM-d7nE~buyXENJnKGTa6GRVjMtHBI1eRs1yqrqJM3O-REL~iheYBZCfPkgtZflpLJRbz69UEgJIfsQj6IPdRbG09QUwdnh-9wpBQso48y8EjtM3f0QozxLx4hXj74AdWAuyYHXxh-6eJh9wf2Y-uLG50~-k2PpQc8E2ZKhJXTNUQUNAtR5PlPpGbEkBD9GrrtCp-834YXET4i4aP6Qh38CMcF-Ebqeh1cyLDKj0tumgEnrkmcNQym1WztU63YeMyhLIBKaLpTTM9VN0aAwaraOxc50ziT9-58ylEzSpoliYYd4COAM-cnHfRs16vc3qiV29EOB~y7cfqj5ew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price: 30.00,
            sale: 0,
            rating: 4,
        },
        {
            id: 15,
            name: "Men's tracksuit Q109_07",
            imgUrl: 'https://s3-alpha-sig.figma.com/img/4e67/ea1d/1a205f7750ba4a5b92914fa9558323bc?Expires=1646006400&Signature=eNYClp7V1YdNND-uliyBoiPyf6I807ZTfwS1b8lzkO4eu99xYnrRitvuvgqvaB4jrltc5hTRqoINKTW0hMsPMQboTIG69jOXV~fZfw1RnQqF~f5XzrrF9bY6XV2O4d6bZyiuvN7gNHrrDOCDYYQ0UOEXK1Kgz0Ttq5IKgGMbtND2YrI5tmS0n7DNm8Yjxs6WYxzD1i2jVYbEE~wXkxOSRlHif~OhMW2TItwmljy8xQ9P~ukRfzYNn4ajt8dtt7qYFAv~Kc3U2~a7PZTJI5-rVkKMWytRrvJgacW-ZFzMtPrWp9e5i3X4Bh21t02xRnt-hJjILdrvtsQD~c6oor09yg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price: 30.00,
            sale: 0,
            rating: 4,
        },
        {
            id: 16,
            name: "Men's tracksuit Q109_08",
            imgUrl: 'https://s3-alpha-sig.figma.com/img/5e97/2c8c/b0caf5756c0252e1a61e929c893c1776?Expires=1646006400&Signature=KFoNvHkGp9VNPpPKhpxiSgUxFckSPb8J6ar9a-mbd5pSwUqhJovO8hb7IjSvEy1NMl3hoBIInNF-xciTHwVStnlyU0PfibR8VhinlyHCpjSfWG81U-hqkGCy7kaQOTAmwljsOoA09la9Cu5HKSyCwW7FxZQWo~wNOkY3aw~lukDJ1ncmxrbkmpTZo~plSNz8-wgsooIccTb-3Z0~xRolDXWLuhqalxAYtx~oQaUQrA-CEob9yuvUrBQnhd0XfNuCtJJd~H-KTWvnyc-45sDAnStOMOpGUMzGm9Wr9GYp~kNtzAFcqoMYfiho96pdSKf37CnJPSFCGyMypK4IsjZXCQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            price: 30.00,
            sale: 0,
            rating: 4,
        },
    ]

}

function getProducts(category) {
    return product[category]
}

export default getProducts