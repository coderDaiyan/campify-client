const Faq = () => {
  return (
    <div className="mx-28">
      <h1 className="text-center text-3xl mb-20 font-bold">
        Freuqnetly Asked Questions
      </h1>

      <div className="collapse collapse-arrow bg-base-200 my-5">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is your return policy?
        </div>
        <div className="collapse-content">
          <p>
            This is a common question that customers have when considering a
            purchase. A clear and concise return policy can help build trust and
            encourage customers to make a purchase.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 my-5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How long does shipping take?
        </div>
        <div className="collapse-content">
          <p>
            Customers want to know when they can expect their order to arrive.
            Providing estimated shipping times can help manage expectations and
            prevent customer inquiries about the status of their order.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 my-5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Do you offer gift wrapping or personalized messages?
        </div>
        <div className="collapse-content">
          <p>
            If you sell products that are often purchased as gifts, offering
            gift wrapping or personalized messages can be a valuable service
            that enhances the customer experience. Sources and related content
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
