const apiRequest = async (url: string, optionObj: object, errMsg: Error) => {
    try {
        const response = await fetch(url, optionObj);
        if (!response.ok) throw Error("Please reload the app.")
    } catch (error) {
        if (error instanceof Error) errMsg = error
    } finally {
        // eslint-disable-next-line no-unsafe-finally
        return errMsg;
    }
}

export default apiRequest;