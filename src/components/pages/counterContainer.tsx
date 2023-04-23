import Counter from './Counter'
import {increment,decrement,reset} from '../../reducers/Actions'
import { connect } from 'react-redux'


    const mapStateToProps=(state:any) =>{return {
        counter:state
        }
    }
    const mapDispatchToProps=(dispatch:any) =>{return {
            decrement: dispatch(decrement),
            increment: dispatch(increment),
            reset: dispatch(reset)
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Counter)