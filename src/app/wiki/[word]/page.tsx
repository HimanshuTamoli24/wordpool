type Props = {
    params: {
        word: string[];
    };
};

export default function Page({ params }: Props) {
    return (
        <div>
            <p>Word: {params.word}</p>
        </div>
    );
}
