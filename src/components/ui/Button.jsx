import {Button as ButtonBs, Spinner} from "react-bootstrap";

export default function Button(props) {

    const loading = props.loading || false

    return (
        <>
            <ButtonBs {...props} disabled={loading}>
                {loading &&
                    <span>
                         <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="mr-2"/>
                        &nbsp;
                    </span>
                }{props.children}</ButtonBs>
        </>
    )
}
