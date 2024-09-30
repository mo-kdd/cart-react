type Props = {
    stars: number;
    minValue: number;
};
export default function Header(props: Props) {
    return (
        <div className="header-container">
            <div className="restaurant-info-container secondary-text">
                <h2 className="secondary-text">Pizzeria</h2>
                <div className="restaurant-infos ">
                    <p>
                        <b>Stars: </b> {props.stars}&#9733;
                    </p>
                    <p>
                        <b>Minimum order value: </b>
                        {props.minValue} €
                    </p>
                </div>
            </div>
        </div>
    );
}
