import { DisputeMessagesInterface } from "@/components/dashboard/DisputeInterface";

export default function DisputePage() {
    return (
      <section className="flex flex-1 flex-col gap-4 p-6 bg-gray-light font-outfit">
        <DisputeMessagesInterface />
      </section>
    );
}