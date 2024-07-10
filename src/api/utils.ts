import {CourseType} from "../types";

export function compareByOrder(a: CourseType, b: CourseType) {
    if (a.order < b.order){
        return -1;
    }
    if (a.order > b.order){
        return 1;
    }
    return 0;
}
