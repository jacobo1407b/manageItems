type ParamReport = {
    name: string,
    value: string
}
export function createParams(params: Array<ParamReport>) {
    let parameterNameValues: any = [];
    params.map((x) => {
        return parameterNameValues.push({
            item: {
                UIType: "Text",
                dataType: "Text",
                name: x.name,
                values: {
                    item: x.value
                }
            }
        })
    });

    return parameterNameValues;
}