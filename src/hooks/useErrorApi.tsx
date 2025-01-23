

const useErrorApi = () => {

    const ErrorHandelerApi = (error: any) => {
        try {
            const { response : { status }, } = error;

            if(status === 401) console.log('error de peticion')
        } catch (error) {
            console.log(error)
        }
    }
  return {ErrorHandelerApi}
}

export default useErrorApi