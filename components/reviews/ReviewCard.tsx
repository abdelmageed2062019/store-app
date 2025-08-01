import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Rating from './Rating';
import Comment from './Comment';

type ReviewCardProps = {
    reviewInfo: {
        comment: string;
        rating: number;
        name: string;
        image: string;
    };
    children?: React.ReactNode;
};

function ReviewCard({ reviewInfo, children }: ReviewCardProps) {
    return (
        <Card className='relative'>
            <CardHeader>
                <div className='flex items-center'>

                    <div >
                        <h3 className='text-sm font-bold capitalize mb-1'>
                            {reviewInfo.name}
                        </h3>
                        <Rating rating={reviewInfo.rating} />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Comment comment={reviewInfo.comment} />
            </CardContent>
            <div className='absolute top-3 right-3'>{children}</div>
        </Card>
    );
}
export default ReviewCard;