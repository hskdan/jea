import Image from 'next/image';

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">제공 서비스</h1>
        
        {/* Insurance Products */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">보험 상품</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">생명보험</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 종신보험</li>
                <li>• 정기보험</li>
                <li>• 변액보험</li>
                <li>• 연금보험</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">건강보험</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 실손보험</li>
                <li>• 암보험</li>
                <li>• 특정질병보험</li>
                <li>• 장기요양보험</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">손해보험</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 자동차보험</li>
                <li>• 주택보험</li>
                <li>• 여행자보험</li>
                <li>• 배상책임보험</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">상담 프로세스</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">상담 신청</h3>
              <p className="text-gray-600">전화 또는 온라인으로 상담을 신청해주세요</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">상담 진행</h3>
              <p className="text-gray-600">현재 상황과 필요사항을 상세히 파악합니다</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">맞춤 설계</h3>
              <p className="text-gray-600">고객님에게 최적화된 보험 상품을 설계합니다</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold mb-2">가입 및 관리</h3>
              <p className="text-gray-600">보험 가입 후 지속적인 관리 서비스를 제공합니다</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">왜 저를 선택해야 하나요?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">전문성</h3>
              <p className="text-gray-600">10년 이상의 경력과 전문 자격증을 보유한 전문가입니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">맞춤 설계</h3>
              <p className="text-gray-600">고객님의 상황과 필요에 맞는 최적의 보험을 설계합니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">지속적인 관리</h3>
              <p className="text-gray-600">가입 후에도 지속적인 관리와 상담을 제공합니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">투명한 상담</h3>
              <p className="text-gray-600">모든 상담과 설계 과정이 투명하게 진행됩니다.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 