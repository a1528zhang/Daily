import {Dimensions} from 'react-native';

function getBlockWidth(): number {
    const {height, width} = Dimensions.get('window');
    return Math.floor(width/BLOCK_NUM_IN_ONE_LINE);
}

export const BLOCK_NUM_IN_ONE_LINE = 3;
export const FIX_BLOCK_WIDTH = getBlockWidth();
export const MOVE_BLOCK_WIDTH = getBlockWidth() - 8;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const WINDOW_WIDTH = Dimensions.get('window').width;

export const TEST_SCENE_JSON = [
    {   
        "id": "1",
        "title": "scene-1",
        "description": "description-1",
        "tasks": [
            {
                "id": "5",
                "title": "task-1",
                "description": "t-description-1",
                "alertTime": 1
            },
            {
                "id": "6",
                "title": "task-2",
                "description": "t-description-2",
                "alertTime": 2
            },
            {
                "id": "7",
                "title": "task-3",
                "description": "t-description-3",
                "alertTime": 3
            }
        ]
    },
    {
        "id": "2",
        "title": "scene-2",
        "description": "description-2",
        "tasks": [
            {
                "id": "8",
                "title": "task-4",
                "description": "t-description-4",
                "alertTime": 4
            },
            {
                "id": "9",
                "title": "task-5",
                "description": "t-description-5",
                "alertTime": 5
            }
        ]
    },
    {
        "id": "3",
        "title": "scene-3",
        "description": "description-3",
        "tasks": [
            {
                "id": "10",
                "title": "task-6",
                "description": "t-description-6",
                "alertTime": 6
            }
        ]
    },
    {
        "id": "4",
        "title": "scene-4",
        "description": "description-4",
        "tasks": []
    },
    {
        "id": "5",
        "title": "scene-5",
        "description": "description-5",
        "tasks": []
    },
    {
        "id": "6",
        "title": "scene-6",
        "description": "description-6",
        "tasks": []
    },
    {
        "id": "7",
        "title": "scene-7",
        "description": "description-7",
        "tasks": []
    },
    {
        "id": "8",
        "title": "scene-8",
        "description": "description-8",
        "tasks": []
    },
    {
        "id": "9",
        "title": "scene-9",
        "description": "description-9",
        "tasks": []
    },
    {
        "id": "10",
        "title": "scene-10",
        "description": "description-10",
        "tasks": []
    },
    {
        "id": "11",
        "title": "scene-11",
        "description": "description-11",
        "tasks": []
    },
    {
        "id": "12",
        "title": "scene-12",
        "description": "description-12",
        "tasks": []
    },
    {
        "id": "13",
        "title": "scene-13",
        "description": "description-13",
        "tasks": []
    },
    {
        "id": "14",
        "title": "scene-14",
        "description": "description-14",
        "tasks": []
    },
    {
        "id": "15",
        "title": "scene-15",
        "description": "description-15",
        "tasks": []
    },
    {
        "id": "16",
        "title": "scene-16",
        "description": "description-16",
        "tasks": []
    }
]