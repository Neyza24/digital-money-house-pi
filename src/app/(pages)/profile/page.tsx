
import { FormProfile } from "@/components/profile/formProfile";
import { PaymentMethodsButton } from "@/components/profile/paymentMethodsButton";


export default function Profile() {

    return (
        <section className="flex-col space-y-4">
            <FormProfile />
            <PaymentMethodsButton />
        </section>
    )
}