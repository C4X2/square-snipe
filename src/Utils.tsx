export function isNonEmptyString(str: string | undefined | null): boolean {
    if (str === undefined || str === "" || str === null) {
        return false;
    }

    return true;
}

export function isEmptyString(str: string | undefined | null): boolean {
    return !isNonEmptyString(str);
}

export function shuffleColors(clrs: string[]): string[] {
    if (!clrs || clrs.length < 1) { return []; }

    const copy = [...clrs];
    for (let i = copy.length - 1; i > 0; i--) {
        const rndmIndex = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[rndmIndex]] = [copy[rndmIndex], copy[i]];
    }

    return copy;
}

export function countOccurances(searchString: string[][] | undefined, stringToFind: string | undefined): number {
    if (searchString === undefined || isEmptyString(stringToFind)) {
        return 0;
    }

    let count: number = 0;
    for (let i = 0; i < searchString.length; i++) {
        const strArr = searchString[i];
        for (const strz of strArr) {
            if (isNonEmptyString(strz) && strz.toLocaleUpperCase() === stringToFind?.toLocaleUpperCase()) {
                count++;
            }
        }
    }

    return count;
}
export function defaultString(str: string | undefined | null, dfStr: string = ""): string {
    if (str === undefined || str === null) {
        return dfStr;
    }

    return str;
}


export function defaultNumber(num: number | undefined | null, dfNum: number = 4): number {
    if (num === undefined || num === null) {
        return dfNum;
    }

    return num;
}

export function booleanValue(bool: OptionalBoolean) : boolean {
    if (bool === null || bool === undefined || (typeof bool === "string" && bool !== "true") || !bool) {
        return false;
    }

    return true;

}

export function loadInAudio(loc: string): HTMLAudioElement {
    return new Audio(loc);
}

export function playAudio(loc: string) : void {
    const audio = new Audio(loc);
    //audio.crossOrigin = 'anonymous';
    //audio.volume = .50;
    //audio.load();
    audio.play().then(function () { }, function (reason) {
        console.log(reason);
    });
}

export type OptionalBoolean = boolean | null | undefined | string;