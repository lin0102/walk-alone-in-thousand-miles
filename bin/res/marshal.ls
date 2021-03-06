{
	"version":"LAYASCENE3D:01",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"marshal",
			"ambientColor":[
				0.212,
				0.227,
				0.259
			],
			"lightmaps":[],
			"enableFog":false,
			"fogStart":0,
			"fogRange":300,
			"fogColor":[
				0.5,
				0.5,
				0.5
			]
		},
		"child":[
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"cjMerge",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						0,
						0
					],
					"rotation":[
						0.7071068,
						0,
						0,
						-0.7071068
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Assets/cjMerge-地.lm",
					"enableRender":true,
					"materials":[
						{
							"type":"Laya.BlinnPhongMaterial",
							"path":"Assets/Materials/cjMerge.lmat"
						}
					]
				},
				"components":[
					{
						"type":"Animator",
						"avatar":{
							"path":"Assets/cjMerge-cjMerge-cjMergeAvatar.lav",
							"linkSprites":{}
						},
						"layers":[],
						"cullingMode":0,
						"playOnWake":true
					}
				],
				"child":[]
			},
			{
				"type":"Camera",
				"props":{
					"name":"Camera",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						0.56,
						2.97
					],
					"rotation":[
						0,
						0,
						0,
						1
					],
					"scale":[
						1,
						1,
						1
					],
					"clearFlag":1,
					"orthographic":false,
					"fieldOfView":60,
					"nearPlane":0.1,
					"farPlane":50,
					"viewport":[
						0,
						0,
						1,
						1
					],
					"clearColor":[
						0.3647058,
						0.6784313,
						0.8862745,
						0
					]
				},
				"components":[],
				"child":[]
			}
		]
	}
}