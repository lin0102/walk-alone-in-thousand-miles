enum enemy {xiang = 'xiang', shi = 'shi', ju = 'ju', pao = 'pao', ma = 'ma', zu = 'zu'}

const position = [
    {
        deadPosition: [
            
        ],
        enemyPosition: [
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
        ],
        enemyPosition: [
            {
                name: enemy.pao,
                x: 1,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 2,
                y: 5
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 2,
            },
            {
                x: 2,
                y: 3,
            }
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 0,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.zu,
                x: 0,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 2,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.xiang,
                x: 0,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 2,
                y: 2,
            },
            {
                x: 0,
                y: 2,
            }
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 1,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 0,
            },
            {
                x: 0,
                y: 1,
            },
            {
                x: 0,
                y: 2,
            },
            {
                x: 0,
                y: 3,
            }
        ],
        enemyPosition: [
            {
                name: enemy.pao,
                x: 0,
                y: 5
            },
            {
                name: enemy.zu,
                x: 0,
                y: 4
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 3,
            },
            {
                x: 2,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 4
            },
            {
                name: enemy.xiang,
                x: 0,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 3,
            },
            {
                x: 2,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 1,
                y: 5
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 5,
            },
            {
                x: 2,
                y: 5,
            },
            {
                x: 2,
                y: 4,
            },
            {
                x: 2,
                y: 3,
            },
            {
                x: 2,
                y: 2
            }
        ],
        enemyPosition: [
            {
                name: enemy.zu,
                x: 1,
                y: 6
            },
            {
                name: enemy.ju,
                x: 2,
                y: 6
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 2,
                y: 3,
            },
            {
                x: 1,
                y: 2,
            },
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 0,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 4,
            },
            {
                x: 2,
                y: 2,
            }
        ],
        enemyPosition: [
            {
                name: enemy.zu,
                x: 0,
                y: 5
            },
            {
                name: enemy.xiang,
                x: 0,
                y: 4
            }
        ]
    },
    {
        deadPosition: [
            {
                x: 1,
                y: 2,
            },
            {
                x: 2,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 2,
                y: 3
            },
            {
                name: enemy.xiang,
                x: 0,
                y: 5
            }
        ]
    }, 







    
    {
        deadPosition: [
        ],
        enemyPosition: [
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 1,
            },
            {
                x: 2,
                y: 1,
            },
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 1,
                y: 3
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 2,
            },
            {
                x: 2,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 0,
                y: 4
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 2,
            },
        ],
        enemyPosition: [
            {
                name: enemy.zu,
                x: 1,
                y: 3
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 2,
                y: 2,
            }
        ],
        enemyPosition: [
            {
                name: enemy.xiang,
                x: 0,
                y: 4
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.zu,
                x: 0,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 1,
            },
            {
                x: 0,
                y: 2,
            },
            {
                x: 0,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 1,
                y: 4,
            }
        ],
        enemyPosition: [
            {
                name: enemy.zu,
                x: 1,
                y: 5
            },
            {
                name: enemy.ju,
                x: 0,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 1,
            },
            {
                x: 2,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 2,
                y: 4
            },
            {
                name: enemy.ma,
                x: 1,
                y: 3
            }
        ]
    },








    
    {
        deadPosition: [
            
        ],
        enemyPosition: [
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
        ],
        enemyPosition: [
            {
                name: enemy.pao,
                x: 1,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 2,
                y: 5
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 2,
            },
            {
                x: 2,
                y: 3,
            }
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 0,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.zu,
                x: 0,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 2,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.xiang,
                x: 0,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 2,
                y: 2,
            },
            {
                x: 0,
                y: 2,
            }
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 1,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 0,
            },
            {
                x: 0,
                y: 1,
            },
            {
                x: 0,
                y: 2,
            },
            {
                x: 0,
                y: 3,
            }
        ],
        enemyPosition: [
            {
                name: enemy.pao,
                x: 0,
                y: 5
            },
            {
                name: enemy.zu,
                x: 0,
                y: 4
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 3,
            },
            {
                x: 2,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 4
            },
            {
                name: enemy.xiang,
                x: 0,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 3,
            },
            {
                x: 2,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 1,
                y: 5
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 5,
            },
            {
                x: 2,
                y: 5,
            },
            {
                x: 2,
                y: 4,
            },
            {
                x: 2,
                y: 3,
            },
            {
                x: 2,
                y: 2
            }
        ],
        enemyPosition: [
            {
                name: enemy.zu,
                x: 1,
                y: 6
            },
            {
                name: enemy.ju,
                x: 2,
                y: 6
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 2,
                y: 3,
            },
            {
                x: 1,
                y: 2,
            },
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 0,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 4,
            },
            {
                x: 2,
                y: 2,
            }
        ],
        enemyPosition: [
            {
                name: enemy.zu,
                x: 0,
                y: 5
            },
            {
                name: enemy.xiang,
                x: 0,
                y: 4
            }
        ]
    },
    {
        deadPosition: [
            {
                x: 1,
                y: 2,
            },
            {
                x: 2,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 2,
                y: 3
            },
            {
                name: enemy.xiang,
                x: 0,
                y: 5
            }
        ]
    }, 









    {
        deadPosition: [
            
        ],
        enemyPosition: [

        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
        ],
        enemyPosition: [
            {
                name: enemy.zu,
                x: 1,
                y: 2
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 2,
            },
        ],
        enemyPosition: [
            {
                name: enemy.xiang,
                x: 2,
                y: 4
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 1,
            },
            {
                x: 2,
                y: 1,
            },
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 1,
                y: 3
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 2,
                y: 1,
            },
        ],
        enemyPosition: [
            {
                name: enemy.zu,
                x: 1,
                y: 2
            },
            {
                name: enemy.zu,
                x: 2,
                y: 2
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 2,
            },
            {
                x: 1,
                y: 1,
            }
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 2,
                y: 3
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 2,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 2,
                y: 3
            },
            {
                name: enemy.zu,
                x: 2,
                y: 4
            }
        ]
    },
    
    







    //sheet1
    {
        deadPosition: [
            
        ],
        enemyPosition: [
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
        ],
        enemyPosition: [
            {
                name: enemy.pao,
                x: 1,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 2,
                y: 5
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 2,
            },
            {
                x: 2,
                y: 3,
            }
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 0,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.zu,
                x: 0,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 2,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.xiang,
                x: 0,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 2,
                y: 2,
            },
            {
                x: 0,
                y: 2,
            }
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 1,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 0,
            },
            {
                x: 0,
                y: 1,
            },
            {
                x: 0,
                y: 2,
            },
            {
                x: 0,
                y: 3,
            }
        ],
        enemyPosition: [
            {
                name: enemy.pao,
                x: 0,
                y: 5
            },
            {
                name: enemy.zu,
                x: 0,
                y: 4
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 3,
            },
            {
                x: 2,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 4
            },
            {
                name: enemy.xiang,
                x: 0,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 3,
            },
            {
                x: 2,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 1,
                y: 5
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 5,
            },
            {
                x: 2,
                y: 5,
            },
            {
                x: 2,
                y: 4,
            },
            {
                x: 2,
                y: 3,
            },
            {
                x: 2,
                y: 2
            }
        ],
        enemyPosition: [
            {
                name: enemy.zu,
                x: 1,
                y: 6
            },
            {
                name: enemy.ju,
                x: 2,
                y: 6
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 2,
                y: 3,
            },
            {
                x: 1,
                y: 2,
            },
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 0,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 4,
            },
            {
                x: 2,
                y: 2,
            }
        ],
        enemyPosition: [
            {
                name: enemy.zu,
                x: 0,
                y: 5
            },
            {
                name: enemy.xiang,
                x: 0,
                y: 4
            }
        ]
    },
    {
        deadPosition: [
            {
                x: 1,
                y: 2,
            },
            {
                x: 2,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 2,
                y: 3
            },
            {
                name: enemy.xiang,
                x: 0,
                y: 5
            }
        ]
    }, 










    {
        deadPosition: [
            {
                x: 0,
                y: 1,
            },
            {
                x: 2,
                y: 1,
            },
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 1,
                y: 3
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 2,
            },
            {
                x: 2,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.ma,
                x: 0,
                y: 4
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 2,
            },
        ],
        enemyPosition: [
            {
                name: enemy.zu,
                x: 1,
                y: 3
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 2,
                y: 2,
            }
        ],
        enemyPosition: [
            {
                name: enemy.xiang,
                x: 0,
                y: 4
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.zu,
                x: 0,
                y: 4
            },
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 1,
            },
            {
                x: 0,
                y: 2,
            },
            {
                x: 0,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 1,
                y: 4,
            }
        ],
        enemyPosition: [
            {
                name: enemy.zu,
                x: 1,
                y: 5
            },
            {
                name: enemy.ju,
                x: 0,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 0,
                y: 1,
            },
            {
                x: 2,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 2,
                y: 4
            },
            {
                name: enemy.ma,
                x: 1,
                y: 3
            }
        ]
    },
    
    








    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
    {
        deadPosition: [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1,
                y: 3,
            },
            {
                x: 0,
                y: 4,
            },
            {
                x: 0,
                y: 6,
            }
        ],
        enemyPosition: [
            {
                name: enemy.shi,
                x: 0,
                y: 2
            },
            {
                name: enemy.xiang,
                x: 2,
                y: 5
            }
        ]
    }, 
]

export {enemy, position}