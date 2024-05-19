//clsx.js
const clsx = require('clsx');

// const result = clsx(
//     {
//         [boardItemActive]:
//             boardArray.findIndex((b) => b.boardId === activeBoardId) ===
//             index,
//     },
//     {
//         [boardItem]:
//             boardArray.findIndex((b) => b.boardId === activeBoardId) !==
//             index,
//     }
// );

const result = clsx(
    {
        "true element":true
    },
    {
        "false element":
            false
    }
);

console.log(result);