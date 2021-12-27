let lvl1 = [
    ['j', 'o', 'o', 'o', 'r', 'r', 'o', 'o', 'o', 'j'],
    ['j', 'o', 'o', 'o', 'r', 'r', 'o', 'o', 'o', 'j'],
    ['j', 'j', 'j', 'o', 'o', 'o', 'o', 'j', 'j', 'j'],
    ['j', 'j', 'j', 'j', 'o', 'o', 'j', 'j', 'j', 'j'],
    ['j', 'j', 'j', 'j', 'j', 'j', 'j', 'j', 'j', 'j'],
    ['j', 'j', 'j', 'j', 'j', 'j', 'j', 'j', 'j', 'j'],
];
let lvl2 = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, 'o', 'o', 'r', 'r', 'o', 'o', null, null],
    [null, null, 'j', 'j', 'o', 'o', 'j', 'j', null, null],
    [null, null, 'j', 'j', 'j', 'j', 'j', 'j', null, null],
];
let lvlTest = [
    ['j', 'o', 'o', 'j', 'r', 'r', 'j', 'o', 'o', 'j'],
    ['j', 'o', 'o', 'j', 'r', 'r', 'j', 'o', 'o', 'j'],
    ['j', 'o', 'o', 'j', 'r', 'r', 'j', 'o', 'o', 'j'],
    ['j', 'j', 'j', 'j', 'j', 'j', 'j', 'j', 'j', 'j'],
    ['j', 'j', 'j', 'j', 'j', 'j', 'j', 'j', 'j', 'j'],
    ['j', 'o', 'o', 'j', 'r', 'r', 'j', 'o', 'o', 'j'],
    ['j', 'o', 'o', 'j', 'r', 'r', 'j', 'o', 'o', 'j'],
    ['j', 'o', 'o', 'j', 'r', 'r', 'j', 'o', 'o', 'j'],
];
let lvls = [lvl1, lvl2, lvlTest];

let nullLine = [
        'nnnnnnnnnn'
    ];
let jBricks = [
        'nnnnnnnnnn',
        'njnjnjnjnj',
        'nnnnnnnnnn',
        'nnnnnnnnnn',
        'jnjnjnjnjn',
        'nnnnnnnnnn',
    ];
let jDoubles = [
        'nnnnnnnnnn',
        'njjnjjnjjn',
        'nnnnnnnnnn',
        'nnnnnnnnnn',
        'jnnjnnjnnj',
        'nnnnnnnnnn',
        'nnnnnnnnnn',
        'njjnjjnjjn',
        'nnnnnnnnnn',
    ];
let patterns = [jBricks, jDoubles];

// let survival = [
//     'njjnjjnjjn',
//     'nnnnnnnnnn',

//     'njjnjjnjjn',
//     'nnnnnnnnnn',

//     // 'nnjnnnnjnn',
//     // 'njjjnnjjjn',
//     // 'nnjnnnnjnn',

//     // 'jnnnjjnnnj',

//     // 'nnjnnnnjnn',
//     // 'njjjnnjjjn',
//     // 'nnjnnnnjnn',

//     // 'jnnnjjnnnj',

//     // 'nnjnnnnjnn',
//     // 'njjjnnjjjn',
//     // 'nnjnnnnjnn',
// ]
