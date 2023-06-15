import './style.css'

type Props = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}

export const SelectOption = ({ title, description, icon, selected, onClick }: Props) => {
    const containerStyle = selected ? { border: "2px solid #25CD89" } : { border: "2px solid #16195C"};

    return (
        <div className="containerOption" onClick={onClick} style={containerStyle}>
            <div className="icon">{icon}</div>
            <div className="info">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
            </div>
        </div>
    )
}
